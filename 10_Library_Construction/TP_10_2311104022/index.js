// index.js

const Aljabar = require('./AljabarLibraries/AljabarLibraries');

console.log("===== Akar Persamaan Kuadrat =====");
const akar = Aljabar.AkarPersamaanKuadrat([1, -3, -10]);
console.log("Akar dari x^2 - 3x - 10 = 0:", akar); // Output: [5, -2]

console.log("===== Hasil Kuadrat =====");
const hasilKuadrat = Aljabar.HasilKuadrat([2, -3]);
console.log("Kuadrat dari (2x - 3)^2:", hasilKuadrat); // Output: [4, -12, 9]
