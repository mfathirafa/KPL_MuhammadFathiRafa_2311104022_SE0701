class PusatDataSingleton {
  constructor() {
    this._data = [];
  }

  /**
   * Tambahkan sebuah data ke dalam array data
   * @param {string} item - Data yang akan ditambahkan
   */
  addData(item) {
    this._data.push(item);
  }

  /**
   * Hapus data berdasarkan indeks
   * @param {number} index - Indeks data yang ingin dihapus
   */
  removeData(index) {
    if (index >= 0 && index < this._data.length) {
      this._data.splice(index, 1);
    } else {
      console.warn('Index out of bounds saat menghapus data');
    }
  }

  /**
   * Cetak semua data yang ada ke console
   */
  printAllData() {
    this._data.forEach((item, idx) => {
      console.log(`[${idx}] ${item}`);
    });
  }

  /**
   * Mendapatkan seluruh data dalam bentuk array
   * @returns {string[]}
   */
  getAllData() {
    return [...this._data]; // Return copy of array untuk menghindari modifikasi luar
  }

  // Static method dan instance untuk singleton
  static getInstance() {
    if (!PusatDataSingleton._instance) {
      PusatDataSingleton._instance = new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }
}

// Export singleton getter saja
module.exports = PusatDataSingleton;
