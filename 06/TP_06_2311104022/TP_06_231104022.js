class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 100) {
            throw new Error("Judul video harus ada dan maksimal 100 karakter.");
        }
        
        this.id = Math.floor(10000 + Math.random() * 90000); // ID random 5 digit
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        if (count > 10000000) {
            throw new Error("Maksimal penambahan play count adalah 10.000.000.");
        }
        
        let newCount = this.playCount + count;
        if (newCount > Number.MAX_SAFE_INTEGER) {
            throw new Error("Jumlah play count melebihi batas maksimum integer.");
        }
        
        this.playCount = newCount;
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

// eksekusi
try {
    let video = new SayaTubeVideo("Tutorial Design By Contract - Muhammad Fathi Rafa");
    video.increasePlayCount(5000);
    video.printVideoDetails();
} catch (error) {
    console.error("Error:", error.message);
}
