const KodePos = require("./kodepos");

class DoorMachine {
    constructor() {
        this.state = "Terkunci";
        console.log("Pintu terkunci");
    }

    toggle() {
        if (this.state === "Terkunci") {
            this.state = "Terbuka";
            console.log("Pintu tidak terkunci");
        } else {
            this.state = "Terkunci";
            console.log("Pintu terkunci");
        }
    }
}

console.log("--- Table-Driven Implementation ---");
const kodePos = new KodePos();
console.log("Kode pos Batununggal: " + kodePos.getKodePos("Batununggal"));
console.log("Kode pos Kujangsari: " + kodePos.getKodePos("Kujangsari"));

console.log("\n--- State-Based Construction ---");
const door = new DoorMachine();
door.toggle();
door.toggle();
