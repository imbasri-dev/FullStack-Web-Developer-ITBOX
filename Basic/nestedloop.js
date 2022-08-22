// buat tampilan seperti ini

/*
1
12
123
1234
12345
menggunakan for

*/
let number = 5;
for (let i = 1; i <= number; i++) {
  let temp = ""; //variabel penampung sementara
  for (let j = 1; j <= i; j++) {
    temp = temp + j;
    //temp += j
  }
  console.log(temp);
}
