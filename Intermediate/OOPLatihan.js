// class Student
// Attributes : name , subjects[array],score
// Method : sebutkanNama() ,sebutkanSubject()

class Student {
  constructor(name, subject, score) {
    this.name = name;
    this.subject = subject;
    this.score = score;
  }

  sebutkanNama() {
    console.log(this.name);
  }
  sebutkanSubject() {
    console.log(this.subject);
  }
}
// proses instantiation / pewaris dari class
let andi = new Student("Andi", ["Math", "English"], 85);
let budi = new Student("Budi", ["IPA", "IPS"], 80);

console.log(andi, budi);
andi.sebutkanNama();
andi.sebutkanSubject();
