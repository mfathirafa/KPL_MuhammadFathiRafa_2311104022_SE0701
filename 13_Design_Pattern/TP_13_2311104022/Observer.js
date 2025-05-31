class Observer {
  constructor(name) {
    this.name = name;
  }

  Update(data) {
    console.log(`${this.name} menerima update: ${data}`);
  }
}

module.exports = Observer;
