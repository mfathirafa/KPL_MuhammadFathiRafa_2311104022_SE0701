const fs = require('fs');

function ReadJSON() {
  try {
    const data = fs.readFileSync('jurnal7_1_2311104022.json', 'utf8');
    const mahasiswa = JSON.parse(data);

    console.log('=== Data Mahasiswa ===');
    console.log(`Nama: ${mahasiswa.firstName} ${mahasiswa.lastName}`);
    console.log(`Jenis Kelamin: ${mahasiswa.gender}`);
    console.log(`Umur: ${mahasiswa.age}`);
    console.log(`Alamat: ${mahasiswa.address.streetAddress}, ${mahasiswa.address.city}, ${mahasiswa.address.state}`);
    console.log('Mata Kuliah:');
    mahasiswa.courses.forEach((course, index) => {
      console.log(`  ${index + 1}. ${course.code} - ${course.name}`);
    });
  } catch (err) {
    console.error('Terjadi kesalahan saat membaca file JSON:', err.message);
  }
}

ReadJSON();
