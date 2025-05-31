class Subject {
  constructor() {
    this.observers = [];
  }

  Attach(observer) {
    this.observers.push(observer);
  }

  Detach(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  Notify(data) {
    this.observers.forEach((observer) => {
      observer.Update(data);
    });
  }
}

module.exports = Subject;
