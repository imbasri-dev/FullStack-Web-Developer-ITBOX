// JavaScript Object Notation = JSON
// sebuah format khusus untuk mendefinisikan objek dalam program.

//tipe data JSON mirip dengan Javascript

/*
Boolean , Array , String , Object , Number , Null
*/

/*
mengakses file JSON biasanya disimpan dalam bentuk file.Module fs (file system) dari node.js

// intialiaze
const fs = require('fs');

fs biasa dipakai  untuk operasi creater / read / update / deleted  = konsep ini populer disebut CRUD


akses JSON
const fs = require('fs');
let data = fs.readFileSync('./data.json');

//setelah data terbaca dalam bentuk string , maka kita perlu mengubah string menjadi object dengan cara  parsingdata:

let parsedData = JSON.parse(data);

*/
