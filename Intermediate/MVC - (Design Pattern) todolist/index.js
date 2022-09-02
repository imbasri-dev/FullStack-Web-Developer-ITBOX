// Proses Argv : bisa mengambil input dari terminal
// command : show,add,delete,update
const command = process.argv[2];
const params = process.argv.slice(3);
// import
const TodoController = require("./controller/TodoController");

switch (command) {
    case "show":
        // console.log("Command show");
        TodoController.show();
        break;
    case "add":
        // console.log("Command add");
        TodoController.add(params);
        break;
    case "delete":
        // console.log("Command delete");
        TodoController.delete(params);
        break;
    case "update":
        // console.log("Command update");
        TodoController.update(params);
        break;
    default:
        // console.log("Masukkan command yang benar!");
        TodoController.message("Masukkan command yang benar!");
        break;
}
