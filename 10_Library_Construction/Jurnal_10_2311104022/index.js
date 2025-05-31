const Matematika = require('./MatematikaLibraries/MatematikaLibraries.js');

console.log("===== FPB =====");
console.log("FPB(60, 45):", Matematika.FPB(60, 45)); // Output: 15

console.log("===== KPK =====");
console.log("KPK(12, 8):", Matematika.KPK(12, 8));   // Output: 24

console.log("===== Turunan =====");
console.log('Turunan([1, 4, -12, 9]):', Matematika.Turunan([1, 4, -12, 9])); 
// Output: "3x2 + 8x - 12"

console.log("===== Integral =====");
console.log('Integral([4, 6, -12, 9]):', Matematika.Integral([4, 6, -12, 9])); 
// Output: "x4 + 2x3 - 6x2 + 9x + C"
