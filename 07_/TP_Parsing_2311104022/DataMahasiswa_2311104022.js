const fs = require('fs');

class DataMahasiswa_2311104022 {
  static ReadJSON() {
    try {
      const data = fs.readFileSync('tp7_1_2311104022.json', 'utf8'); 
      const obj = JSON.parse(data);

      const namaLengkap = `${obj.nama.depan} ${obj.nama.belakang}`;
      const nim = obj.nim;
      const fakultas = obj.fakultas;

      console.log(`Nama ${namaLengkap} dengan nim ${nim} dari fakultas ${fakultas}`);
    } catch (err) {
      console.error("Gagal membaca file JSON:", err.message);
    }
  }
}

// Panggil method
DataMahasiswa_2311104022.ReadJSON();
