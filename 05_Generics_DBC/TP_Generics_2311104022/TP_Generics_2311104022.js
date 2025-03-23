







class DataGeneric {
    constructor() {
        this.data = [];
    }

    // Method untuk menambah data
    addData(item) {
        this.data.push(item);
    }

    // Method untuk mencetak semua data
    printAllData() {
        console.log("Data yang tersimpan:", this.data);
    }
}

// Contoh penggunaan
const database = new DataGeneric();
database.addData("Fathi");
database.addData(2025);
database.addData(true);
database.printAllData();
