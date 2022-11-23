// day 10 latihan

//no 1
/*
Create a function to convert Excel sheet column title to its corresponding column number.
● Example :
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
…
● Example :
    Input : AB
    Output : 28
    // 1. input huruf berupa string 
    // 3. konversi huruf menjadi angka dengan perulangan secara ascending dengan methode charCodeAt
    // 4. tampilkan huruf dalam output number
*/

function alphaToNum(alpha) {
  var hasil = 0;
  for (let i = 0; i < alpha.length; i++) {
    hasil *= 26;
    hasil += alpha[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return hasil;
}
console.log(alphaToNum("CA"));

/* Nomor 2
Given a non-empty array of integers nums, every element appears twice except for one. Find
that single one.
● Example 1:
○ Input: nums = [2,2,1]
○ Output: 1
● Example 2:
○ Input: nums = [4,1,2,1,2]
○ Output: 4
● Example 3:
○ Input: nums = [1]
○ Output: 1
*/
// jika ada angka sama maka dihilangkan delete kemudian di push ke array baru

function hasDuplicates(arr) {
  var double = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) double.push(arr[i]);
  }
  return double;
}
var arrCoba = [4, 4, 1, 5];
console.log(hasDuplicates(arrCoba));

// no 3 function anapgram

function checkStringsAnagram(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    return "Invalid Input";
  }
  let str1 = a.toLowerCase().split("").sort().join("");
  let str2 = b.toLowerCase().split("").sort().join("");
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}
console.log(checkStringsAnagram("tar", "rat"));

// Nomor 4 : You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1
// or 2 steps. In how many distinct ways can youclimb to the top?
// Aturan boleh naik cuma 1 atau 2anak tangga
// n=0 => 1 cara                            => 1 //  (tidak ada : )
// n=1 => 1 cara                            => 1 // mulai dari sini
// n=2 => 1+1, 2                            => 2
// n=3 => 1+2, 2+1, 1+1+1 => 2 cara         => 3
// n=4 => 1+1+1+1,                          => 5
//        2+1+1,  1+2+1,  1+1+2,
//        2+2
//        total = 5 step
// n=5 => 1+1+1+1+1                         => 8
//        2+1+1+1, 1+2+1+1, 1+1+2+1, 1+1+1+2
//        2+2+1, 2+1+2, 1+2+2
//        total = 8

// pola umum mirip deret fibonanci
// // f(n)= f(n-1)+ f(n-2)
var climbStairs = function (n) {
  if (n == 1 || n == 0) return 1; // our base cases

  let u1 = 1;
  let u2 = 2;

  for (let i = 3; i <= n; i++) {
    let u3 = u1 + u2;
    u1 = u2;
    u2 = u3;
  }
  return u2;
};
hasiltotal = climbStairs(6);
console.log(hasiltotal);
