//no 1
var nilai = [56, 65, 78, 85, 90, 79, 100];
var min, max, average;
var sum = 0;
nilai.forEach(function (val) {
  sum += val;
});
average = sum / nilai.length;
nilai.forEach((val, idx) => {
  if (idx == 0) {
    min = max = val;
  } else if (val < min) {
    min = val;
  } else if (val > max) {
    max = val;
  }
});
console.log(` rata-rata = ${average}\n Min : ${min}\n Max: ${max}`);

//no 2 :Write function that an array of word and return a string by
// concatitaning the word in the array, separate by comma and the last word by an “and”

var kataArray = ["kambing", "rusa", "sapi", "kelelawar", "ular", "buaya"];
var concatinatingkata = (hewan) => {
  var ahir = hewan.pop();
  return `${hewan.join(",")} and ${ahir}`;
};
hasilkata = concatinatingkata(kataArray);
console.log(hasilkata);
///

// No 3. dengan split langsung
//
var katacoba = "Aku harus bisa lulus bootcamp";
hasilsplit = katacoba.split("bisa"); //pembatas bisa
console.log(hasilsplit);
// dengan split function
var splitkatafunction = (kata) => {
  return kata.split(" "); // pembatas spasi
};
hasilfunction = splitkatafunction(katacoba);
console.log(hasilfunction);

//no 4
// funtion penjumlahan array
var arrSatu = [10, 21, 45, 5];
var arrDua = [4, 5, 8, 9];
var penjumlahanArray = (arrSatu, arrDua) => {
  return arrSatu.map((value, index) => {
    return value + arrDua[index];
  });
};
var hasilpenjumlahanDuaArray = penjumlahanArray(arrSatu, arrDua);
console.log(hasilpenjumlahanDuaArray);
//
// no 5, penambahan elemen baru di ahir, tapi jika sudah ada element tersebut tidak usah ditambahakn
var elements = [1, 2, 3, "kata", "india", "kimia"];
var tambah = "india";
var penambahanElemen = (array, elemen) => {
  if (!array.includes(elemen)) {
    array.push(elemen);
  }
  return array;
};
hasilpenambahan = penambahanElemen(elements, tambah);
console.log(hasilpenambahan);
///

// no 6
// hilangkan semua bilangan ganjil return pada aary baru yang terdiri dari genap saja
genapganjil = [1, 2, 3, 5, 46, 7, 90, 35, 58, 25];
var genap = [];
genapganjil.forEach((number) => {
  if (number % 2 == 0) {
    genap.push(number);
  }
  return [genap];
});
console.log(genap);
