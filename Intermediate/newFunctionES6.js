const items = ["item1", "item2", "item3"];
const copyItems = [];

// before ES5
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// after ES6
items.forEach((item) => {
  console.log(item);
  copyItems.push(item);
});
console.log(copyItems);

const person = [
  { id: 1, name: "Pertama" },
  { id: 2, name: "Pertama" },
  { id: 3, name: "Pertama" },
];

const changeArray = person.map((data) => `${data.id} ${data.name}`);
changeArray.forEach((array) => console.log(array));
console.log(changeArray);

// contoh map / mereturn nilai array baru

let numbers = [1, 10, 20];
// let result = numbers.map((number) => {
//   return number * 2;
// });
let result = numbers.map((number) => number * 2); // karena arrow function langsung mereturn hasil
console.log(result);
