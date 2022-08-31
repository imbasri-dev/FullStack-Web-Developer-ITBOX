//pengenalan ecmascript 6

//hoisting adalah proses dimana syntax akan diangkat/dijalankan terlebih dahulu mesti urutannya tidak sesuai

x = 1; // variabel belum dibuat tapi sudah di inisialisasi
console.log("x = " + x);
var x; // variabel baru dibuat/deklarasi

console.log(hello); // ini akan error karena hello belum di deklarasi/dibuat
let hello;
