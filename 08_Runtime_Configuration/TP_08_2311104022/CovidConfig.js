const fs = require('fs');
const readline = require('readline');

class CovidConfig {
  constructor(path = 'covid_config.json') {
    this.path = path;
    this.default = {
      satuan_suhu: "celcius",
      batas_hari_deman: 14,
      pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
      pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini"
    };
    this.config = this.loadConfig();
  }

  loadConfig() {
    try {
      if (fs.existsSync(this.path)) {
        const raw = fs.readFileSync(this.path, 'utf-8');
        return JSON.parse(raw);
      } else {
        return this.default;
      }
    } catch (e) {
      console.error("Gagal membaca file config:", e);
      return this.default;
    }
  }

  // Method untuk mengubah satuan suhu
  ubahSatuan() {
    if (this.config.satuan_suhu === "celcius") {
      this.config.satuan_suhu = "fahrenheit";
    } else {
      this.config.satuan_suhu = "celcius";
    }

    // Simpan perubahan ke file
    fs.writeFileSync(this.path, JSON.stringify(this.config, null, 2));
    console.log(`Satuan suhu berhasil diubah ke ${this.config.satuan_suhu}`);
  }
}

async function runApp() {
  const covid = new CovidConfig();
  const config = covid.config;

  // Panggil ubahSatuan() untuk mengubah satuan
  covid.ubahSatuan();

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise(res => rl.question(q, res));

  // Pertanyaan suhu
  const suhuInput = await ask(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu}: `);
  const suhu = parseFloat(suhuInput);

  // Pertanyaan hari demam
  const hariInput = await ask("Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ");
  const hari = parseInt(hariInput);

  let suhuValid = false;
  if (config.satuan_suhu === "celcius") {
    suhuValid = suhu >= 36.5 && suhu <= 37.5;
  } else {
    suhuValid = suhu >= 97.7 && suhu <= 99.5;
  }

  const hariValid = hari < config.batas_hari_deman;

  if (suhuValid && hariValid) {
    console.log(config.pesan_diterima);
  } else {
    console.log(config.pesan_ditolak);
  }

  rl.close();
}

// Jalankan aplikasi
runApp();
