const Subject = require('./Subject');
const Observer = require('./Observer');

// Membuat instance Subject (objek yang diamati)
const dataCenter = new Subject();

// Membuat beberapa observer (pengamat)
const observerA = new Observer("Observer A");
const observerB = new Observer("Observer B");
const observerC = new Observer("Observer C");

// Menambahkan observer ke subject
dataCenter.attach(observerA);
dataCenter.attach(observerB);
dataCenter.attach(observerC);

// Mengirim notifikasi ke semua observer
dataCenter.notify("Data telah diperbarui!");

// Menghapus salah satu observer
dataCenter.detach(observerB);

// Mengirim notifikasi kedua kali
dataCenter.notify("Update kedua, Observer B sudah tidak menerima.");
