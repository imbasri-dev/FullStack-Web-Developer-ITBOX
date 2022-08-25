// array of object
// pengenalan dan contoh

var foods = [
  {
    name: "Nasi Goreng",
    origin: "Indonesia",
  },
  {
    name: "Sushi",
    origin: "Japan",
  },
  { name: "Steak", origin: "Western" },
];
// cara aksses ya
console.log(foods[0]);
console.log(foods[0].name);
console.log(foods[0].origin);

console.log("===Pembatas===");

// mari latihan
// bikinlah fungsi untuk ubah array dua dimensi menjadi array of object

var items = [
  ["Asus", "laptop", 7500000],
  ["Dell", "laptop", 7000000],
  ["Corsair", "ram", 1250000],
];

// hasil output harus seperti ini
/*
[
  { name: 'Asus', type: 'laptop', price: 7500000 },
  { name: 'Dell', type: 'laptop', price: 7000000 },
  { name: 'Corsair', type: 'ram', price: 1250000 }
]
*/

function changeToArrayofObject(array2D) {
  // buat penampung
  var result = [];
  var tempObj = {};

  for (let i = 0; i < array2D.length; i++) {
    tempObj.name = array2D[i][0];
    tempObj.type = array2D[i][1];
    tempObj.price = array2D[i][2];
    // setelah di inisialisasi itu data di push
    result.push(tempObj);
    // kembalikan tempObj kosong
    tempObj = {};
  }
  //   return hasil ke result array
  return result;
}
// cara debug/akses
console.log(changeToArrayofObject(items));
