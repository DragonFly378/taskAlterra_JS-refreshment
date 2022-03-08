/* 
SOAL 
----------
Kalian memiliki variabel berikut 
(let arr = [1.5, 2.56,5.1, 12.33]) 
Bulatkan ke atas variable tersebut 
sehingga output yang dihasilkan adalah [ 2, 3, 5, 12 ]
*/

let arr = [1.5, 2.56, 5.1, 12.33];

arr = arr.map((e) => {
    return Math.round(e);
});
console.log(arr);