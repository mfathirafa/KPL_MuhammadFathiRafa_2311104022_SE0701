const PusatDataSingleton = require('./PusatDataSingleton');

// Dapatkan instance singleton
const data1 = PusatDataSingleton.getInstance();
const data2 = PusatDataSingleton.getInstance();

// Tambahkan beberapa data
data1.addData("Muhammad Fathi Rafa");
data1.addData("Eduardo Bagus");
data1.addData("Mahrus Ali");
data1.addData("Asisten: Kak Andi");

// Cetak data dari instance data2 (seharusnya sama dengan data1)
console.log("Cetak dari data2:");
data2.printAllData();

// Hapus data pada indeks ke-3 (item ke-4)
data2.removeData(3);

console.log("\nCetak dari data1 setelah penghapusan:");
data1.printAllData();

// Cetak jumlah data yang ada
console.log(`\nJumlah data di data1: ${data1.getAllData().length}`);
console.log(`Jumlah data di data2: ${data2.getAllData().length}`);
