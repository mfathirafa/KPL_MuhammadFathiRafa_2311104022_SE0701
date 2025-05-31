class Observer {
  /**
   * Membuat instance Observer dengan nama tertentu.
   * @param {string} name Nama observer
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Fungsi callback saat menerima update.
   * @param {any} data Data yang diterima dari subject
   */
  update(data) {
    console.log(`${this.name} menerima update: ${data}`);
  }
}

module.exports = Observer;
