// konsep inheritance
// example
// blue print Parents
class Person {
  constructor(name, age) {
    this.name;
    this.age;
  }
}
// fungsi super() fungsi yang dipanggil untuk menunjuk atribut dari class parentnya
class Programmer extends Person {
  constructor(name, age) {
    super(name, age);
  }
}

//konsep polymorphism
/*objek yang berbeda dapat diakses melalui interface yang sama Contoh: rumus luas benda berlaku untuk berbagai bentuk,Masing-masing bentuk memiliki rumus yang khas , tapi yang kita cari adalah sama , "luas" */

// konsep Encapsulation
// Konsep pengikatan data dan metode disatukan menjadi satu unit data.

// this._ = class bersifat private maka perlu get and set dalam pengambilan data
class Student {
  constructor(name, gpa) {
    this._name = name;
    this._gpa = gpa;
  }
  get name() {
    return this._name;
  }
  get gpa() {
    return this._gpa;
  }
  set setName(name) {
    this._name = name;
  }
  set setGpa(gpa) {
    this._gpa = gpa;
  }
}

// example
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// variabel fullName dijalankan dengan value ditetapkan.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper
