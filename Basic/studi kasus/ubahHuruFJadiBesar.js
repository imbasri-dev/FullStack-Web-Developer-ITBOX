// mengubah jadi huruf besar

function changeToCapital(str) {
  // ubah parameter menjadi string
  //cara 1 "lama"
  var word = String(str);
  return word.toLocaleUpperCase();

  //cara 2
  //   return str.toUpperCase(); langsung ubah karena sudah mengetahui built in function
}

// hasil
console.log(changeToCapital("hello world"));
console.log(changeToCapital("mAKaN Nasi"));
