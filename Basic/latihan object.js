// soal buatlah method dari bawah ini:
/*
profile:
nama : caca
berat:45kg
tinggi:155cm
hobi:nonton,makan

// invoke method
caca.sebutkanhobby();

///hasil
hoby caca:
1.nonton
2.makan

*/

var caca = {
  nama: "caca",
  berat: 45,
  tinggi: 155,
  hobby: ["nonton", "makan"],

  //   method
  sebutkanHobby: function () {
    console.log("Hobby caca: ");
    // penggunaan this merupakan memanggil caca/ dalam object sendiri
    for (let i = 0; i < this.hobby.length; i++) {
      console.log(i + 1 + "." + this.hobby[i]);
    }
  },
};

caca.sebutkanHobby();
