class KodeBuah {
    constructor() {
        this.kodeBuahDict = {
            "Apel": "A00",
            "Aprikot": "B00",
            "Alpukat": "C00",
            "Pisang": "D00",
            "Paprika": "E00",
            "Blackberry": "F00",
            "Ceri": "G00",
            "Kelapa": "H00",
            "Jagung": "I00",
            "Kurma": "J00",
            "Durian": "K00",
            "Anggur": "L00",
            "Melon": "M00",
            "Semangka": "N00"
        };
    }

    getKodeBuah(namaBuah) {
        return this.kodeBuahDict[namaBuah] || "Kode Buah tidak ditemukan";
    }
}

module.exports = KodeBuah;