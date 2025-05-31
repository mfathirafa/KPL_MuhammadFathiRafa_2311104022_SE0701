class Subject {
  constructor() {
    this._observers = [];
  }

  /**
   * Menambahkan observer ke daftar pengamat.
   * @param {Observer} observer
   */
  attach(observer) {
    this._observers.push(observer);
  }

  /**
   * Menghapus observer dari daftar pengamat.
   * @param {Observer} observer
   */
  detach(observer) {
    this._observers = this._observers.filter(obs => obs !== observer);
  }

  /**
   * Memberi notifikasi ke semua observer yang terdaftar.
   * @param {any} data Data yang dikirim ke observer
   */
  notify(data) {
    this._observers.forEach(observer => {
      observer.update(data);
    });
  }
}

module.exports = Subject;
