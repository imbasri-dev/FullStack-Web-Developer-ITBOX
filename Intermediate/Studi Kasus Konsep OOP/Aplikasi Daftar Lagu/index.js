const command = process.argv[2]; // mengambil input dari terminal
const params = process.argv.slice(3); //memotong array dari hasil input
const PlaylistController = require("./controllers/PlaylistController");

switch (command) {
    case "add":
        PlaylistController.add();
        break;
    case "remove":
        PlaylistController.remove();
        break;
    case "make":
        PlaylistController.make();
        break;
    case "showPlaylist":
        PlaylistController.show();
        break;
    default:
        console.log("masukkan command yang benar, terima kasih!");
        break;
}
