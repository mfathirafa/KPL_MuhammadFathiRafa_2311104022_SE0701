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
  
  // Ambil 3 dua-digit dari NIM (2311104022 -> "23", "11", "10")
  const NIM = "2311104022";
  const duaDigit1 = parseFloat(NIM.substring(0, 2));
  const duaDigit2 = parseFloat(NIM.substring(2, 4));
  const duaDigit3 = parseFloat(NIM.substring(4, 6));
  
  // Buat objek SimpleDataBase
  const database = new SimpleDataBase();
  
  // Tambahkan tiga data ke database
  database.AddNewData(duaDigit1);
  database.AddNewData(duaDigit2);
  database.AddNewData(duaDigit3);
  
  // Panggil method untuk menampilkan semua data
  database.PrintAllData();
  