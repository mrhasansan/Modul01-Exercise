// soal no 1
// Write a code to convert celsius to fahrenheit.
function suhu(celcius) {
  var fahrenheit = (180 / 100) * celcius + 32;
  return fahrenheit;
}
console.log(suhu(100));

// soal no 2
// Write a code to check whether the number is odd or even
function cekGenapGanjil(bil) {
  if (bil % 2 == 0) {
    return `bilangan ${bil} adalah genap`;
  } else {
    return `bilangan ${bil} adalah ganjil`;
  }
}
console.log(cekGenapGanjil(22));

// soal no 3
// Write a code to check whether the number is prime number or not
// Bilangan prima adalah bilangan asli lebih dari 1
// yang bukan hasilkali dari dua bilangan asli yang lebih kecil.
function primeTest(num) {
  if (num <= 1) {
    return "bukan prima";
  } else if (num === 2) {
    return "prima";
  } else {
    for (x = 2; x < num; x++) {
      if (num % x === 0) {
        return "bukan prima";
      }
    }
    return "prima";
  }
}
console.log(primeTest(67));

// soal no 4
// Write a code to find the sum of the numbers 1 to N.
// ○ Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
function sumTotal(num) {
  var hasilsum = 0;
  for (i = 0; i <= num; i++) {
    hasilsum += i;
  }
  return hasilsum;
}
console.log(sumTotal(10));

// no 5
// Write a code to find factorial of a number.
function faktorial(num) {
  var hasilfact = 1;
  for (i = 1; i <= num; i++) {
    hasilfact *= i;
  }
  return hasilfact;
}
console.log(faktorial(5));

// no 6
// Write a code to print the first N fibonacci numbers.

var fibonanci = function (n) {
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
console.log(fibonanci(19));

module.exports = {
  suhu,
  cekGenapGanjil,
  primeTest,
  sumTotal,
  faktorial,
  fibonanci,
};
