//no 1
var perkalian = 9;
var i;
for (i = 1; i <= 10; i++) {
  console.log(`pengalian hasil ${perkalian} x ${i}`);
}
//no 2
var stringkata = "hasansan";
var stringArray = stringkata.split("");
var reverseArray = stringArray.reverse();
var joinreverseArray = reverseArray.join("");
if (stringkata == joinreverseArray) {
  console.log(`kata ${stringkata} adalah jenis string Palindrome`);
} else console.log(`kata ${stringkata} adalah jenis string bukan palindrome`);

//no 3
var cm = 70;
var hasil = cm * 10e-5;
console.log(`hasil konversi ${cm} cm = ${hasil} km`);

//no 4
const uang = 500000;
console.log("Rp, " + uang.toLocaleString("id"));

//no 6
var string = "jumawa";
var stringArray = string.split("");
var reverseArray = stringArray.reverse();
var joinreverseArray = reverseArray.join("");

console.log(`reverse dari kata ${string} adalah ${joinreverseArray}`);

//no 3
var kalimat = "Hello world";
var search = "ello";
var kalimatbaru, search, searchHilang, kalimatArray, kalimatBaru;
if (kalimat.match(search)) {
  kalimatBaru = kalimat.replace("");
  console.log(`kata awal ${kalimat}`);
  console.log(`kata yang anda cari adalah ${search}`);
  console.log(kalimatBaru);
} else {
  console.log(`tidak ada kata yang cocok dalam pecarian`);
}
