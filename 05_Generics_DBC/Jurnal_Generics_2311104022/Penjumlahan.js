console.log("Ini dari main");
class Penjumlahan {
    // method parameter generic = parameter digunakan dengan berbagai tipe data tanpa menulis ulang fungsi
    JumlahTigaAngka(a, b, c) {
        let hasil = a +b + c; // tipe data dynamic. variabel menyimpan berbagai jenis tipe data
        return hasil;
    }
}

const NIM = "2311104022";
const duadigit1 = parseFloat(NIM.substring(0, 2)); //indeks 0 sampai sebelum 2
const duadigit2 = parseFloat(NIM.substring(2, 4));
const duadigit3 = parseFloat(NIM.substring(4, 6));

// akhir nim 2 => pakai float
const input1 = parseFloat(duadigit1);
const input2 = parseFloat(duadigit2);
const input3 = parseFloat(duadigit3);

// buat objek baru
const hitung = new Penjumlahan();
console.log(hitung.JumlahTigaAngka(input1, input2, input3));

class SimpleDataBase {
    constructor() {
      this.storedData = [];  // List<T>
      this.inputDates = [];  // List<Date>
    }
  
    // Method untuk menambahkan data baru ke database
    AddNewData(data) {
      this.storedData.push(data); 
      this.inputDates.push(new Date().toISOString()); // Simpan waktu input
    }
  
    // Method untuk mencetak semua data
    PrintAllData() {
      this.storedData.forEach((data, index) => {
        console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
      });
    }
  }
  
// Buat objek SimpleDataBase
const database = new SimpleDataBase();
  
// Tambahkan tiga data ke database
database.AddNewData(duaDigit1);
database.AddNewData(duaDigit2);
database.AddNewData(duaDigit3);
  
// Panggil method untuk menampilkan semua data
database.PrintAllData();
  
console.log("Ini dari implementasi-generic-class");

