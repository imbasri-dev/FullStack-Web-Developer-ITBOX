const command = process.argv[2]; // mengambil input dari terminal
const params = process.argv.slice(3); //memotong array dari hasil input

switch (command) {
    case "add":
        console.log("command add");
        break;
    case "remove":
        console.log("command remove");
        break;
    case "make":
        console.log("command make");
        break;
    default:
        console.log("masukkan command yang benar, terima kasih!");
        break;
}
