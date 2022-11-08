// soal no 1
var celsius = 100;
var fahrenheit = (180 / 100) * celsius + 32;
console.log(` suhu ${celsius} Celsius sama dengan ${fahrenheit} fahrenheid`);

// soal no 2
var bil = 11;
if (bil % 2 == 0) {
  console.log(`bilangan ${bil} adalah genap`);
} else console.log(`bilangan ${bil} adalah ganjil`);

// soal no 3

const bilPilihan = 4;
let apakahPrima = true;

if (bilPilihan === 1) {
  console.log("1 adalah bukan bilangan prima.");
} else if (bilPilihan > 1) {
  for (let i = 2; i < bilPilihan; i++) {
    if (bilPilihan % i == 0) {
      apakahPrima = false;
      break;
    }
  }

  if (apakahPrima) {
    console.log(`${bilPilihan} adalah bilangan prima`);
  } else {
    console.log(`${bilPilihan} adalah bukan bilangan prima`);
  }
}

// check if number is less than 1
else {
  console.log("The number is not a prime number.");
}

// soal no 4
var sum = 10;
var hasilsum = 0;
for (i = 0; i <= sum; i++) {
  hasilsum += i;
}
console.log(
  `total penjumlahan semua bilangan 1 sampai ${sum} adalah ${hasilsum}`
);

// no 5
var fact = 10;
var hasilfact = 1;
for (i = 1; i <= fact; i++) {
  hasilfact *= i;
}
console.log(`Faktorial dari bilangan ${fact} adalah ${hasilfact}`);

// no 6
const fibonanci = (n) => {
  var a = 0,
    b = 1,
    c = n;
  for (var i = 2; i <= n; i++) {
    c = a + b;
    a = b = c;
  }
  return c;
};
console.log(fibonanci);
