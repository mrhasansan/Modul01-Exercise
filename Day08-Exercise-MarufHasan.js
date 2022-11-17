//Pseudocode : rancangan penulisan progam berdasarkan algoritma yang dibuat
//  function penjumlahan 2 angka

//INPUT :
// butuh 2 parameter (numA, numB) dengan numA,numB tipedata number
//PROSES
// nilai dari parameter untuk penjumlahan add (+)
// return hasilvalue
// OUTPUT
// result dengan tipe data number
function add(numA, numB) {
  return (result = numA + numB);
}
add(5, 7);
console.log(result);
// pseudocode untuk function ganjil dan genap

//INPUT :
// butuh 1 parameter number dengan tipe data number

//PROSES
// 1. menggunakan value number dalam parameter
// 2. mengecek value apakah bilangan genap/ganjil
// 3. jika value %2 ==0 bilangan genap (true)
// 4. return result
// 4. jika value !%2 ==0 bilangan ganjil (false)
// 5. return result true or false

// OUTPUT
// result value dengan tipe boolean

function genapGanjil(number) {
  if (number % 2 == 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}
var result = genapGanjil(92);
console.log(result);

// buat pseudokode untuk reverse string versi split-reverse-join
// INPUT
// 1. input parameter berupa string kata
// PROSES
// 2. mengubah string kata dengan split menjadi array
// 3. mereverse array hasil split kata
// 4. menjoin hasil array dengan string kembali
// OUTPUT
// 4, return kata hasil string
// return versi split
function reverseKata(kata) {
  kata = kata.split("").reverse().join("");
  return kata;
}
console.log(reverseKata("akukamu"));

// reverse string versi loop
function reverseloop(kalimat) {
  var kal = "";
  for (i = kalimat.length - 1; i >= 0; i--) {
    kal += kalimat[i];
  }
  return kal;
}
console.log(reverseloop("kamuaku"));

// filterduplicate acc map
var angka = ["aku", "kamu", "dia"];
var newMap = angka.map((a) => a);
console.log(newMap);
// function buatan
// 1. buat parameter array dan callbackfunction
function duplicateMap(arr, cb) {
  // 2. membuat array kosong
  var newArrMap = [];
  // 3. melakukan iterasi untuk setiap elemen array i
  for (var i = 0; i < arr.length; i++) {
    //4. simpan dalam resultcalback
    var resCb = cb(arr[i], i);
    //5. push hasil dari pemanggilan callback function kedalam array baru
    newArrMap.push(resCb);
  }
  // 6 return array hasil
  return newArrMap;
}
var multi = (angka, i) => {
  return `${i}.${angka}`;
};
var hasil = duplicateMap(angka, multi);
console.table(hasil);

// Function Filter

var angka = [1, 2, 3, 4, 5, 6, 7];
var newFilter = angka.filter((a) => a >= 4);
console.log(newFilter);
// function buatan filter
// 1. buat parameter array dan callbackfunction
function duplicateFilter(arr, cb) {
  // 2. membuat array kosong
  var newFilter = [];
  // 3. melakukan iterasi untuk setiap elemen array i
  for (var i = 0; i < arr.length; i++) {
    //4. simpan dalam resultcalback return
    var isTrue = cb(arr[i]);
    if (isTrue) {
      //5. push hasil dari pemanggilan callback function kedalam array baru
      newFilter.push(arr)[i];
    }
  }
  // 6 return array hasil
  return newFilter;
}
var multi = (angka) => {
  return angka >= 4;
};
var hasil = duplicateFilter(angka, multi);
console.log(hasil);
