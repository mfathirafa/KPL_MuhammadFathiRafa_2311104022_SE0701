const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_FILE = path.join(__dirname, 'users.json');

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

document.getElementById('registerBtn').addEventListener('click', register);
document.getElementById('loginBtn').addEventListener('click', login);

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function loadUsers() {
  return JSON.parse(fs.readFileSync(DATA_FILE));
}

function saveUsers(users) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
    console.log("✅ users.json berhasil disimpan");
  } catch (err) {
    console.error("❌ Gagal menyimpan:", err);
  }
}

function isValidUsername(username) {
  return /^[A-Za-z]{3,20}$/.test(username); // hanya huruf A-Z, 3-20 karakter
}

function isValidPassword(password, username) {
  const panjang = password.length >= 8 && password.length <= 20;
  const simbol = /[!@#$%^&*]/.test(password);
  const tidakTermasukUsername = !password.toLowerCase().includes(username.toLowerCase());
  return panjang && simbol && tidakTermasukUsername;
}

function register() {
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;

  if (!isValidUsername(username)) {
    return tampilkanPesan("Username harus 3-20 huruf alfabet A-Z/a-z");
  }
  if (!isValidPassword(password, username)) {
    return tampilkanPesan("Password harus 8-20 karakter, ada simbol (!@#$%^&*), dan tidak mengandung username");
  }

  const users = loadUsers();
  if (users.find(user => user.username === username)) {
    return tampilkanPesan("Username sudah terdaftar!");
  }

  const hashed = hashPassword(password);
  users.push({ username, password: hashed });
  saveUsers(users);

  tampilkanPesan("Registrasi berhasil!");
}

function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const users = loadUsers();
  const hashed = hashPassword(password);

  const found = users.find(user => user.username === username && user.password === hashed);
  if (found) {
    tampilkanPesan("Login berhasil!");
  } else {
    tampilkanPesan("Login gagal. Username atau password salah.");
  }
}

function tampilkanPesan(msg) {
  document.getElementById('message').textContent = msg;
}
