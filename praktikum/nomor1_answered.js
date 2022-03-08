/* SOAL 
----
a. Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console
b. Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console. 
c. Lakukan pemanggilan untuk function perkenalan pada baris 31.
d. Kalian bebas mengubah kode di atas sehingga menampilkan output pada console seperti pada gambar di bawah
    Budi terdaftar sebagai kegiatan kampus merdeka
    array = Budi
    a adalah = kampus merdeka
    b adalah = kampus merdeka
    perkenalkan nama saya Budi nomor urut kampus merdeka sekarang sedang mengikuti kampus merdekaberasal dari indonesia

*/

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