const fs = require('fs');
const readline = require('readline');

class BankTransferConfig {
  constructor(path = 'bank_transfer_config.json') {
    this.default = {
      lang: "en",
      transfer: {
        threshold: 25000000,
        low_fee: 6500,
        high_fee: 15000
      },
      methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
      confirmation: {
        en: "yes",
        id: "ya"
      }
    };
    this.config = this.loadConfig(path);
  }

  loadConfig(path) {
    try {
      if (fs.existsSync(path)) {
        const raw = fs.readFileSync(path, 'utf-8');
        return JSON.parse(raw);
      } else {
        return this.default;
      }
    } catch (e) {
      console.error("Error reading config file:", e);
      return this.default;
    }
  }
}

async function runApp() {
  const config = new BankTransferConfig().config;
  const lang = config.lang;
  const threshold = config.transfer.threshold;
  const lowFee = config.transfer.low_fee;
  const highFee = config.transfer.high_fee;
  const methods = config.methods;
  const confirmation = config.confirmation;

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise(res => rl.question(q, res));

  // i. Pesan input jumlah uang
  const promptMsg = lang === "en"
    ? "Please insert the amount of money to transfer: "
    : "Masukkan jumlah uang yang akan di-transfer: ";

  let amountStr = await ask(promptMsg);
  let amount = parseInt(amountStr);
  if (isNaN(amount) || amount < 0) amount = 0;

  // ii. Hitung biaya transfer dan total
  const fee = amount <= threshold ? lowFee : highFee;
  const total = amount + fee;

  if (lang === "en") {
    console.log(`Transfer fee = ${fee}`);
    console.log(`Total amount = ${total}`);
  } else {
    console.log(`Biaya transfer = ${fee}`);
    console.log(`Total biaya = ${total}`);
  }

  // iii. Pesan pilih metode transfer
  console.log(lang === "en" ? "Select transfer method:" : "Pilih metode transfer:");

  // iv. Print metode transfer dengan numbering
  methods.forEach((m, i) => {
    console.log(`${i + 1}. ${m}`);
  });

  await ask('> '); // menerima input metode transfer tapi tidak diproses

  // v. Pertanyaan konfirmasi
  const confWord = lang === "en" ? confirmation.en : confirmation.id;
  const confMsg = lang === "en"
    ? `Please type "${confWord}" to confirm the transaction: `
    : `Ketik "${confWord}" untuk mengkonfirmasi transaksi: `;

  const userConf = await ask(confMsg);

  // vi & vii. Output hasil konfirmasi
  if (userConf.toLowerCase() === confWord.toLowerCase()) {
    console.log(lang === "en" ? "The transfer is completed" : "Proses transfer berhasil");
  } else {
    console.log(lang === "en" ? "Transfer is cancelled" : "Transfer dibatalkan");
  }

  rl.close();
}

// Jalankan aplikasi
runApp();
