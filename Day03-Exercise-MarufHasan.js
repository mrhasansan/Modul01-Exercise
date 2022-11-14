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

//no 7
var string = "jumawa";
var stringArray = string.split("");
var reverseArray = stringArray.reverse();
var joinreverseArray = reverseArray.join("");

console.log(`reverse dari kata ${string} adalah ${joinreverseArray}`);

//no 5
var kalimat = "Hello world";
var search = "ell";
var kalimatbaru = kalimat.replace(search, "");
console.log(
  ` kalimat ${kalimat} dihilangkan huruf ${search} menjadi ${kalimatbaru}`
);

//no 6 camelCase string (dalam bentuk funtion)

function stringCamelCase(string) {
  var arr1 = string.split(" ");
  var newArr1 = [];
  for (i = 0; i < arr1.length; i++) {
    newArr1.push(arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1));
  }
  return newArr1.join(" ");
}
hasilstringCamelCase = stringCamelCase(" kamu harus bisa");
console.log(hasilstringCamelCase);
