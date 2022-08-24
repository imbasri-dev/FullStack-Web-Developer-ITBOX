//basic funtion
function hello() {
  console.log("Hallo, Selamat Pagi");
}

hello(); // cara memanggil function / trigger function

function checkAngka(num) {
  if (num % 2 === 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil");
  }
}
checkAngka(5); //Ganjil

// function moduler (function memanggil/menggunakan return function lain)
// contoh

// menggunakan built-in function split memisahkan kata/kata dengan spasi dan return ke array
function splitToArray(str) {
  var tempArray = str.split(" ");
  return tempArray;
}
console.log(splitToArray("Hello")); //contoh

function jumlahKata(kalimat) {
  var result = splitToArray(kalimat);
  var arrayLength = result.length;
  return arrayLength;
}
console.log(jumlahKata("Hallo Kawan Kawan")); // maka mereturn 3 sesuai isi dari kata/kata di dalam parameter

// latihan function
//soal
/*Cek apakah panjang sebuah kata sandi
diantara 5 dan 12.
Buatlah function
-Menghitung jumlah karakter
-cek apakah panjang karakter antara 5 dan 12

contoh :
kata sandi :123
// Masukkan karakter antara 5 dan 12
kata sandi :abcdefgh
// kata sandi diterima
*/

//function menghitung karakter jumlah
//menggunakan toString agar number diubah menjadi string
function countLength(str) {
  var changeData = str.toString();
  var countWord = changeData.length;
  return countWord;
}
console.log("check : " + countLength(123465));

//function check karakter 5 s/d 12
function checkLength(str) {
  var strLength = countLength(str);
  if (strLength >= 5 && strLength <= 12) {
    return "Kata sandi diterima";
  } else {
    return "Masukkan karakter 5 dan 12 ";
  }
}

console.log(checkLength(123)); // gagal
console.log(checkLength(123456789)); // diterima
console.log(checkLength("pass1234"));
