// Proses Argv : bisa mengambil input dari terminal
// command : show,add,delete,update
const command = process.argv[2];
const params = process.argv.slice(3);

switch (command) {
  case "show":
    console.log("Command show");
    break;
  case "add":
    console.log("Command add");
    break;
  case "delete":
    console.log("Command delete");
    break;
  case "update":
    console.log("Command update");
    break;
  default:
    console.log("Masukkan command yang benar!");
    break;
}
