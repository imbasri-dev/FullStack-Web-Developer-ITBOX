const Playlist = require("../models/Playlist.js");

class PlaylistController {
    static show() {
        Playlist.show();
    }
    static add() {}
    static remove() {}
    static make() {}
}

module.exports = PlaylistController;
