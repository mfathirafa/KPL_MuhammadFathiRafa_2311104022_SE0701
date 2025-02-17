import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("siapa nama kamu?", (nama) => {
    console.info(`Hallo ${nama}`)

    input.close();
})