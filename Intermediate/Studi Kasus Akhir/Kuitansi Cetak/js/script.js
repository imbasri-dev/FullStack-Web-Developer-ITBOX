let BtnSubmit = document.getElementById("btnSubmit");

let carts = [];
function submitHandler() {
   let id;
   if (carts.length === 0) {
      id = 1;
   } else {
      id = carts[carts.length - 1].id + 1;
   }

   let barangValue = document.getElementById("barang").value;
   let namaValue = document.getElementById("nama").value;
   let hargaValue = document.getElementById("harga").value;
   let tempObj = {
      id,
      nama: barangValue,
      harga: +hargaValue,
      //   tanda + diharga agar menjadi sebuah number
   };
   document.getElementById("namaCart").innerHTML = namaValue;
   carts.push(tempObj);
   console.log(carts);
   getCarts();
}

function getCarts() {
   let tBody = document.getElementById("tBody");
   //    reset
   tBody.innerHTML = "";
   carts.forEach((cart) => {
      tBody.innerHTML += `<tr>
    <td>${cart.id}</td>
    <td>${cart.nama}</td>
    <td>Rp.${cart.harga}</td>
    </tr>`;
   });
}

BtnSubmit.addEventListener("click", submitHandler);

let BtnPrint = document.getElementById("btnPrint");
function printHandler() {
   document.querySelector(".form-box").style.display = "none";
   BtnPrint.style.display = "none";

   window.print();
}

BtnPrint.addEventListener("click", printHandler);
