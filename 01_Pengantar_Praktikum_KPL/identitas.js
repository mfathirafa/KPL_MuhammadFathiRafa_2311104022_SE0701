import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("siapa nama kamu?", (nama) => {
    console.info(`Hallo ${nama}`)
    input.question("jurusan kamu?", (jurusan) => {
        console.info(`Hallo ${jurusan}`)
        input.question("dari univ mana kamu?", (universitas) => {
            console.info(`Hallo ${universitas}`)
            input.question("umur?", (umur) => {
                console.info(` ${umur}`)
                input.close();
            })      
        })        
    })
})