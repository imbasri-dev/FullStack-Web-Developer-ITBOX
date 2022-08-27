// soal buatlah function mengelompokkan tiap anak yang lulus kelas ya

// var students = [
//   ["Charlie", "A", 87],
//   ["Berno", "A", 75],
//   ["Andi", "B", 81],
//   ["Ella", "B", 73],
// ];

// output yang harus dibuat
/*
[
    {
    class: 'A',
    students: [ 'Charlie', 'Berno' ],
    score: [ 87, 75 ]
    },
    {
    class: 'B',
    students: [ 'Andi', 'Ella' ],
    score: [ 81, 73 ]
    }
]
*/

// jawaban
var students = [
  ["Charlie", "A", 87],
  ["Berno", "A", 75],
  ["Andi", "B", 81],
  ["Ella", "B", 73],
];

function groupClass(arr2D) {
  var result = [];
  var classA = {
    class: "A",
    students: [],
    score: [],
  };
  var classB = {
    class: "B",
    students: [],
    score: [],
  };

  for (let i = 0; i < arr2D.length; i++) {
    if (arr2D[i][1] === "A") {
      classA.students.push(arr2D[i][0]);
      classA.score.push(arr2D[i][2]);
    } else {
      classB.students.push(arr2D[i][0]);
      classB.score.push(arr2D[i][2]);
    }
  }
  result.push(classA);
  result.push(classB);
  return result;
}

console.log(groupClass(students));
//hasil :
/*[
  { class: 'A', students: [ 'Charlie', 'Berno' ], score: [ 87, 75 ] },
  { class: 'B', students: [ 'Andi', 'Ella' ], score: [ 81, 73 ] }
]
 */
