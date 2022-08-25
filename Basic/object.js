// contoh object

var student = {
  name: "Vincent",
  gpa: 3.21,
  isGraduated: true,
};

// akses
console.log(student.name);
console.log(student.gpa);
console.log(student["isGraduated"]);

// latihan ubah dari array menjadi object menggunakan function

var buah = ["durian", 75000, true];
function changeToObject(array) {
  var result = {};
  result.jenis = array[0];
  result.harga = array[1];
  result.enak = array[2];
  return result;
}
console.log(changeToObject(buah));
/*
output
{
  jenis: "durian",
  harga: 75000,
  enak: true,
};
*/

// method dalam objek -> fungsi yang berada dalam object contoh :

var mobil = {
  // key
  name: "Civic",
  cc: 5000,

  // method
  startEngine: function () {
    console.log("Mesin nyala");
  },
};

mobil.startEngine(); // cara akses method
