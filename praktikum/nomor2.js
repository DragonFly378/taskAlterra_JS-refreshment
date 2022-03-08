// Nomer 2
/*  
SOAL
-------
a. jelaskan kenapa baris 21,22,23 tidak dapat tampil?
b. jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
c. Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat di eksekusi? jelaskan.
 */

/*  
Jawab 
-------
 - nomer 2a
    baris 21,22,23 tidak dapat tampil 
    dikarenakan variabel "terdaftar" memiliki nilai awal false
    sedangkan dibaris 21 terdapat if statement akan melakukan sesuatu dengan 
    kondisi "terdaftar" = true. Maka tidak akan ke print.

  - nomer 2b
    deklarasi pada baris 26 akan menyebabkan error karena "nama" ialah 
    variabel const, sedangkan const ialah variabel yang tidak dapat diganti (reassignment)
  
  - nomer 2c
    ketika baris 26 sudah di komen, baris 28 tidak bisa di eksekusi,
    karena variabel asal terdapat di functional scoop, kita tidak bisa 
    melakukan pemanggilan diluar function perkenalan()
*/