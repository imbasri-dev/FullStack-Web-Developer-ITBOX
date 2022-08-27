// check bilangan prima

function checkPrima(angka) {
  var flag = 0;
  for (var i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      flag++;
    }
  }
  if (flag === 2) {
    return true;
  } else {
    return false;
  }
}
// bilangan prioma : bilangan yang memiliki 2 faktor

// contoh

/*
5: 1,5
7: 1,7
10:1,2,5,10
*/
// hasil
console.log(checkPrima(5)); //true
console.log(checkPrima(7)); //true
console.log(checkPrima(10)); //false
