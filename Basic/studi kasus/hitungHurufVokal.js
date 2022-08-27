// menghitung huruf vokal

function countVocal(str) {
  var result = {
    a: 0,
    i: 0,
    u: 0,
    e: 0,
    o: 0,
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result.a++;
    } else if (str[i] === "i") {
      result.i++;
    } else if (str[i] === "u") {
      result.u++;
    } else if (str[i] === "e") {
      result.e++;
    } else if (str[i] === "o") {
      result.o++;
    }
  }

  return result;
}
// hasil
console.log(countVocal("makan nasi goreng"));

// a i u e o
/*
{ a: 3, i: 1, u: 0, e: 1, o: 1 }
*/
