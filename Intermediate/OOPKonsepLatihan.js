// latihan
/*
buat class Person dengan atribut dasar :
->name
->age

bikin subclass Programmer dan Studen dan berikan atribut tambahan
=>skill di class Programmer
=>scores di class Student

manfaatkan konsep inheritance dan Encapsulation

//

*/
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// // subtansi dari extends Person
// class Programmer extends Person {
//   constructor(name, age, skill) {
//     super(name, age);
//     this.skill = skill;
//   }
// }
// class Student extends Person {
//   constructor(name, age, scores) {
//     super(name, age);
//     this.scores = scores;
//   }
// }
// // test instence
// let person = new Person("Basri", 26);
// let progammer = new Programmer("Danang", 25, ["html", "css", "javascript"]);
// let student = new Student("Jodi", 27, [85]);
// console.log(person);
// console.log(progammer);
// console.log(student);

// encapsulation
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }

  set setName(name) {
    this._name = name;
  }
  set setAge(age) {
    this._age = age;
  }
}
// subtansi dari extends Person
class Programmer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this._skill = skill;
  }
  get skill() {
    return this._skill;
  }
  set setSkill(skill) {
    this._skill = skill;
  }
}
class Student extends Person {
  constructor(name, age, scores) {
    super(name, age);
    this._scores = scores;
  }
  get scores() {
    return this._scores;
  }
  set setScores(scores) {
    this._scores = scores;
  }
}
// test instence
let person = new Person("Basri", 26);
let progammer = new Programmer("Danang", 25, ["html", "css", "javascript"]);
let student = new Student("Jodi", 27, [85]);
console.log(person);
console.log(progammer);
console.log(student.name);

// catatan dikarenakan basic javascript bukan untuk OOP , jadi untuk encapsulation di js tidak ada private.
