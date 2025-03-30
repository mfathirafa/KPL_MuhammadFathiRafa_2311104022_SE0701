import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan satu huruf: ", (input) => {

  const huruf = input.toUpperCase();
  const vokal = ["A", "I", "U", "E", "O"];

  if (vokal.includes(huruf)) {
    console.log(`Huruf ${huruf} merupakan huruf vokal`);
  } else {
    console.log(`Huruf ${huruf} merupakan huruf konsonan`);
  }

  const bilanganGenap = [];
  for (let i = 1; i <= 5; i++) {
    bilanganGenap.push(i * 2);
  }

  bilanganGenap.forEach((num, index) => {
    console.log(`Angka genap ${index + 1} : ${num}`);
  });

  rl.close();
});