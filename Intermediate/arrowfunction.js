/*
tiga cara deklarasi function

-deklarasi function : function(name)
-expresi function : function didalam variabel
-simbol panah => (ES6) / arrow function
*/

// example
// deklarasi
function hello() {
  console.log("Hello");
}

// ekspresi
const sapaAnda = function () {
  console.log("Hello");
};

// arrow function
const sapa = () => {
  console.log("Hello");
};

// ES5
function tambah(a, b) {
  return a + b;
}

// ES6
let z = 5;
let c = 5;
const plus = (z, c) => z + c + 100;
console.log(plus(z, c));
