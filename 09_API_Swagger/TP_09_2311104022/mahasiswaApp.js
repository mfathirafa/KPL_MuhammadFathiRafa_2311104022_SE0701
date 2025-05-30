const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5001; // Bebas sesuai kebutuhan

// Data mahasiswa statis (static variable), urutan pertama adalah nama anda
let mahasiswaList = [
  { nama: "Fathir Afa", nim: "1302025001" },
  { nama: "Stephen Curry", nim: "1302000002" },
  { nama: "LeBron James", nim: "1302000003" }
];

app.use(bodyParser.json());

// GET seluruh mahasiswa
app.get('/api/mahasiswa', (req, res) => {
  res.json(mahasiswaList);
});

// GET mahasiswa by index
app.get('/api/mahasiswa/:index', (req, res) => {
  const idx = parseInt(req.params.index, 10);
  if (idx >= 0 && idx < mahasiswaList.length) {
    res.json(mahasiswaList[idx]);
  } else {
    res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }
});

// POST tambah mahasiswa
app.post('/api/mahasiswa', (req, res) => {
  const { nama, nim } = req.body;
  const mahasiswaBaru = { nama, nim };
  mahasiswaList.push(mahasiswaBaru);
  res.status(201).json(mahasiswaBaru);
});

// DELETE mahasiswa by index
app.delete('/api/mahasiswa/:index', (req, res) => {
  const idx = parseInt(req.params.index, 10);
  if (idx >= 0 && idx < mahasiswaList.length) {
    const terhapus = mahasiswaList.splice(idx, 1);
    res.json(terhapus[0]);
  } else {
    res.status(404).json({ message: "Mahasiswa tidak ditemukan" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}/api/mahasiswa`);
});