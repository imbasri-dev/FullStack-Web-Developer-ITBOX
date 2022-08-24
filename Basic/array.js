var items = ["laptop", "hp"];
// menambahkan data array bagian paling belakang / push
items.push("mouse");
console.log("push :", items);
// menghapus data array bagian paling belakang / pop
items.pop();
console.log("pop :", items);

// array concat menggabungkan data array lain menjadi 1 / merger

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);

console.log(children);
