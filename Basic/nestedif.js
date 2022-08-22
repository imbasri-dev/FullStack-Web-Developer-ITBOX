// nested if / if bercabang
//aplikasi wahana test izin naik berdasarkan kondisi tersebut umur min 17 dan jika umur kurang tinggi harus min 150

let umur = 16;
let tinggi = 150;

if (umur < 17) {
  if (tinggi < 150) {
    console.log("Tidak boleh masuk");
  } else {
    console.log("Boleh naik");
  }
} else {
  console.log("Boleh Masuk");
}
