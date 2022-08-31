// OOP = Object Oriented Programming

/*
cara pemograman yang menggunakan pola pikir bahwa semua hal didalam pemograman adalah "objek" yang memiliki sifat (attribute)dan perilaku (method) khusus
*/

// cara membuat class / blueprint
class Vehicle {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }

  //   method
  startEngine() {
    console.log("Start Engine");
  }
  stopEngine() {
    console.log("Stop Engine");
  }
}

// instance / pembuatan fisik dari blueprint

let vehicle = new Vehicle("Civiv", "Sedan", 10000000);
console.log(vehicle); //Vehicle { name: 'Civiv', type: 'Sedan', price: 10000000 }
