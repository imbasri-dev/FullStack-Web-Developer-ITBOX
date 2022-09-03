const Note = require("./Note");
let note = new Note();
note.addIncome("Gaji Bulan", 1000000);
note.addExpense("Bayar Kouta", 1000000);
note.listIncome();
note.listExpense();
note.balance();
// console.log(note);
