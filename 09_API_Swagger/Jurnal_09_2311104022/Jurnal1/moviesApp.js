const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const Movie = require("./Movie");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
const port = 3000; // You can change this if needed

// Helper to read and write JSON
const moviesFile = path.join(__dirname, "movies.json");

function readMovies() {
  const data = fs.readFileSync(moviesFile, "utf-8");
  return JSON.parse(data);
}

function writeMovies(movies) {
  fs.writeFileSync(moviesFile, JSON.stringify(movies, null, 2), "utf-8");
}

app.use(bodyParser.json());

// Swagger setup
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movies API",
      version: "1.0.0",
      description: "API for Movies using Node.js and Express (JSON file storage)",
    },
    servers: [{ url: `http://localhost:${port}` }],
  },
  apis: ["./moviesApp.js"],
};
const swaggerSpec = swaggerJsdoc(options);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         Title:
 *           type: string
 *         Director:
 *           type: string
 *         Stars:
 *           type: array
 *           items:
 *             type: string
 *         Description:
 *           type: string
 */

/**
 * @swagger
 * /api/Movies:
 *   get:
 *     summary: Get all movies
 *     responses:
 *       200:
 *         description: List of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
app.get("/api/Movies", (req, res) => {
  res.json(readMovies());
});

/**
 * @swagger
 * /api/Movies/{id}:
 *   get:
 *     summary: Get movie by index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Movie index
 *     responses:
 *       200:
 *         description: Movie object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Movie not found
 */
app.get("/api/Movies/:id", (req, res) => {
  const movies = readMovies();
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= movies.length) {
    return res.status(404).json({ message: "Movie not found" });
  }
  res.json(movies[id]);
});

/**
 * @swagger
 * /api/Movies:
 *   post:
 *     summary: Add a new movie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       201:
 *         description: Movie created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 */
app.post("/api/Movies", (req, res) => {
  const { Title, Director, Stars, Description } = req.body;
  const movie = new Movie(Title, Director, Stars, Description);
  const movies = readMovies();
  movies.push(movie);
  writeMovies(movies);
  res.status(201).json(movie);
});

/**
 * @swagger
 * /api/Movies/{id}:
 *   delete:
 *     summary: Delete a movie by index
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Movie index
 *     responses:
 *       204:
 *         description: Movie deleted
 *       404:
 *         description: Movie not found
 */
app.delete("/api/Movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const movies = readMovies();
  if (isNaN(id) || id < 0 || id >= movies.length) {
    return res.status(404).json({ message: "Movie not found" });
  }
  movies.splice(id, 1);
  writeMovies(movies);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log(`Swagger docs at http://localhost:${port}/swagger`);
});