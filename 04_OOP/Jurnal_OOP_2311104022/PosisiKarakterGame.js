const KodeBuah = require("./KodeBuah");

class PosisiKarakterGame {
    constructor() {
        this.posisi = "Berdiri";
        console.log("Karakter dalam posisi awal: Berdiri");
    }

    ubahPosisi(aksi) {
        const stateTransition = {
            "Berdiri": { "TombolS": "Tengkurap" },
            "Tengkurap": { "TombolW": "Berdiri", "TombolS": "Duduk" },
            "Duduk": { "TombolW": "Tengkurap" }
        };

        if (stateTransition[this.posisi] && stateTransition[this.posisi][aksi]) {
            this.posisi = stateTransition[this.posisi][aksi];
            console.log("Karakter berubah menjadi:", this.posisi);
        } else {
            console.log("Aksi tidak valid dari posisi saat ini.");
        }
    }
}

// Main Program
console.log("--- Table-Driven Implementation ---");
const kodeBuah = new KodeBuah();
console.log("Kode buah Apel: " + kodeBuah.getKodeBuah("Apel"));
console.log("Kode buah Pisang: " + kodeBuah.getKodeBuah("Pisang"));

console.log("\n--- State-Based Construction ---");
const karakter = new PosisiKarakterGame();
karakter.ubahPosisi("TombolS"); // Tengkurap
karakter.ubahPosisi("TombolS"); // Duduk
karakter.ubahPosisi("TombolW"); // Kembali ke Tengkurap
karakter.ubahPosisi("TombolW"); // Kembali ke Berdiri