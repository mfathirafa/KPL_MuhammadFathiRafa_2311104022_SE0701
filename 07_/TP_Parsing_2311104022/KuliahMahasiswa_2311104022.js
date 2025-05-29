const fs = require('fs');

class KuliahMahasiswa_2311104022 {
  static ReadJSON() {
    try {
      const data = fs.readFileSync('tp7_2_2311104022.json', 'utf8'); 
      const obj = JSON.parse(data);

      const courses = obj.courses;

      console.log("Daftar mata kuliah yang diambil:");
      courses.forEach((course, index) => {
        console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
      });
    } catch (err) {
      console.error("Terjadi kesalahan saat membaca file JSON:", err.message);
    }
  }
}

// Panggil method
KuliahMahasiswa_2311104022.ReadJSON();
