let bdays = ["10-17", "05-19", "20-19"];
var temp = [];
var tmp = [];
var hasil = [];

// console.log(bdays);

// untuk memecah tiap huruf menjadi item array
for (var i = 0; i < bdays.length; i++) {
  temp = temp.concat([...bdays[i]]);
}
console.log(temp);

// untuk mengubah '-' menjadi '/'
const map1 = temp.map((item) => {
  return item == "-" ? "/" : item;
});
console.log(map1 + "\n");

//  pencacahan setiap index ke 5 melakukan penggabungan
for (var j = 0; j < map1.length; j++) {
  //   console.log(map1[j]);
  if ((j + 1) % 5 == 0) {
    var tampung = [];

    tampung = tampung.concat(
      map1[j - 4],
      map1[j - 3],
      map1[j - 2],
      map1[j - 1],
      map1[j]
    );
    tampung = tampung.join("");
    hasil = hasil.concat([tampung]);
    console.log(tampung);
  }
}
console.log("\n" + hasil);
