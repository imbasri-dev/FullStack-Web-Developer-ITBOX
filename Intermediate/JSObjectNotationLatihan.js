// Read file JSON
const fs = require("fs");
let data = fs.readFileSync(".//data.json", "utf8");
let parsedData = JSON.parse(data);
// console.log(parsedData);

console.log("List Student : ");
parsedData.forEach((data) => {
  console.log(`${data.id}.${data.name}, ${data.score}`);
});

/*
result :
List Students :
1.Andi, 90
2.Charlie, 85
*/

// Fakta tentang JSON

/*
1.JSON merupakan format data paling populer dalam
Application Programming Interface (API)

2.Struktur JSON dipakai juga untuk notasi struktur data pada NOSQL contoh:MongoDB
*/
