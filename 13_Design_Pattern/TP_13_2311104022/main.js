const Subject = require('./Subject');
const Observer = require('./Observer');

// Membuat subject utama (objek yang diamati)
const pusatData = new Subject();

// Membuat observer (pengamat)
const observer1 = new Observer("Observer A");
const observer2 = new Observer("Observer B");
const observer3 = new Observer("Observer C");

// Menambahkan observer ke subject
pusatData.Attach(observer1);
pusatData.Attach(observer2);
pusatData.Attach(observer3);

// Memberi notifikasi ke semua observer
pusatData.Notify("Data telah diperbarui!");

// Melepas salah satu observer
pusatData.Detach(observer2);

// Memberi notifikasi lagi
pusatData.Notify("Update kedua, Observer B sudah tidak menerima.");
