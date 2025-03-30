class SayaTubeVideo {
    constructor(title) {
        if (!title || title.length > 200) {
            throw new Error("Judul video harus diisi dan maksimal 200 karakter");
        }
        
        this.id = Math.floor(10000 + Math.random() * 90000); // ID 5 digit random
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        try {
            if (count < 0 || count > 25000000) {
                throw new Error("Jumlah play count harus antara 0 dan 25.000.000");
            }
            
            if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
                throw new Error("Play count melebihi batas maksimum integer");
            }
            
            this.playCount += count;
        } catch (error) {
            console.error("Terjadi kesalahan: ", error.message);
        }
    }

    printVideoDetails() {
        console.log(`ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

class SayaTubeUser {
    constructor(username) {
        if (!username || username.length > 100) {
            throw new Error("Username harus diisi dan maksimal 100 karakter");
        }
        
        this.username = username;
        this.uploadedVideos = [];
    }

    addVideo(video) {
        try {
            if (!(video instanceof SayaTubeVideo)) {
                throw new Error("Hanya objek SayaTubeVideo yang dapat ditambahkan");
            }
            if (video.playCount > Number.MAX_SAFE_INTEGER) {
                throw new Error("Play count video melebihi batas maksimum integer");
            }
            this.uploadedVideos.push(video);
        } catch (error) {
            console.error("Terjadi kesalahan: ", error.message);
        }
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((sum, video) => sum + video.playCount, 0);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.slice(0, 8).forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}

// outputt
const user = new SayaTubeUser("Muhammad Fathi Rafa");

const filmTitles = [
    "Review Film Avengers: Endgame oleh Muhammad Fathi Rafa",
    "Review Film Spider-Man: No Way Home oleh Muhammad Fathi Rafa",
    "Review Film Black Panther oleh Muhammad Fathi Rafa",
    "Review Film Doctor Strange oleh Muhammad Fathi Rafa",
    "Review Film Guardians of the Galaxy oleh Muhammad Fathi Rafa",
    "Review Film Thor: Ragnarok oleh Muhammad Fathi Rafa",
    "Review Film Captain America: Civil War oleh Muhammad Fathi Rafa",
    "Review Film Iron Man oleh Muhammad Fathi Rafa",
    "Review Film Ant-Man oleh Muhammad Fathi Rafa",
    "Review Film The Marvels oleh Muhammad Fathi Rafa"
];

filmTitles.forEach(title => {
    const video = new SayaTubeVideo(title);
    video.increasePlayCount(Math.floor(Math.random() * 1000000));
    user.addVideo(video);
});

// try catch
try {
    const testVideo = new SayaTubeVideo("Test Overflow Video");
    for (let i = 0; i < 1000; i++) {
        testVideo.increasePlayCount(25000000);
    }
} catch (error) {
    console.error("Overflow terjadi: ", error.message);
}

user.printAllVideoPlaycount();
