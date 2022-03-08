let bdays = ["10-17", "05-19", "20-19"];
var temp = [];
var hasil = [];
// console.log(bdays);

for (var i = 0; i < bdays.length; i++) {
    temp = temp.concat([...bdays[i]]); // untuk memecah tiap huruf menjadi item array
}
//console.log(temp);

// untuk mengubah '-' menjadi '/'
temp = temp.map((item) => {
    return item == "-" ? "/" : item; // mengubah '-' menjadi '/'
});
// console.log(temp + "\n");

//  pencacahan setiap index ke 5 melakukan penggabungan
for (var j = 0; j < temp.length; j++) {
    if ((j + 1) % 5 == 0) {
        var tampung = [];
        tampung = tampung.concat(
            temp[j - 4],
            temp[j - 3],
            temp[j - 2],
            temp[j - 1],
            temp[j]
        );
        tampung = tampung.join("");
        hasil = hasil.concat([tampung]);
        //console.log(tampung);
    }
}
console.log("\n" + hasil);