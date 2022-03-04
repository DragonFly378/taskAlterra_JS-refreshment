var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log(
    "perkenalkan nama saya " +
      nama +
      " nomor urut " +
      a +
      " sekarang sedang mengikuti " +
      b +
      "berasal dari " +
      asal
  );
}

terdaftar = true; // nomer 1b
if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}
const [tmp, temp, nomer1a] = lengkap_arr;
const array = nomer1a;
console.log("array = " + array); // nomer 1a

a = b;
// nama = b;

// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan(); // nomer 1c
