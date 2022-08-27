// Nilai Max dan Min
var nilai = [10, 2, 4, 5, 12, 11, 6, 7];
function nilaiMaxMin(angka) {
  var max = angka[0];
  var min = angka[0];

  for (var i = 0; i < angka.length; i++) {
    if (max < angka[i]) {
      max = angka[i];
    }
    if (min > angka[i]) {
      min = angka[i];
    }
  }
  return {
    max: max,
    min: min,
  };
}
console.log(nilaiMaxMin(nilai));

// hasil
/*

{
    max :12;
    min :2;
}
*/
