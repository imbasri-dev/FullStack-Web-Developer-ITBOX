const fs = require("fs");

class Playlist {
    constructor(id, name, songs) {
        this.id = id;
        this.name = name;
        this.songs = songs || [];
    }
    static getPlaylist() {
        let data = JSON.parse(fs.readFileSync("../data.json", "utf8"));
        return data;
    }
    static show() {
        let data = this.getPlaylist();
        console.log(data);
    }
}

module.exports = Playlist;
