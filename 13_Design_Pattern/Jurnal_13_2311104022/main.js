const PusatDataSingleton = require('./PusatDataSingleton');

const data1 = PusatDataSingleton.GetDataSingleton();
const data2 = PusatDataSingleton.GetDataSingleton();

data1.AddSebuahData("Muhammad Fathi Rafa");
data1.AddSebuahData("Eduardo Bagus");
data1.AddSebuahData("Mahrus Ali");
data1.AddSebuahData("Asisten: Kak Andi");

console.log("Cetak dari data2:");
data2.PrintSemuaData();

data2.HapusSebuahData(3);

console.log("\nCetak dari data1 setelah penghapusan:");
data1.PrintSemuaData();

console.log(`\nJumlah data di data1: ${data1.GetSemuaData().length}`);
console.log(`Jumlah data di data2: ${data2.GetSemuaData().length}`);
