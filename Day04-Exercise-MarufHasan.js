// no 1
var start = ``;
var height = 4;
var p = 1;
for (var i = 0; i < height; i++) {
  for (j = 0; j <= i; j++) {
    if (p <= 9) {
      start += ` 0${p++}`;
    } else start += ` ${p++}`;
  }
  start += `\n`;
}
console.log(start);

//no 2
var n = 100;
for (i = 3; i <= n; i++) {
  if (i % 15 == 0) console.log(`FizzBuzz => ${i}`);
  else if (i % 3 == 0) console.log(`Fizz => ${i}`);
  else if (i % 5 == 0) console.log(`Buzz => ${i}`);
}

// no 3
var massa = 60; // dalam kg
var tinggi = 168; // dalam cm
var imt = massa / Math.pow(tinggi / 100, 2);
if (imt < 18.5) {
  imt = console.log(`Massa ${massa} kg dan ${tinggi} cm is lees weiht`);
} else if (imt >= 18.5 && imt <= 24.9) {
  imt = console.log(`Massa ${massa} kg dan ${tinggi} cm is ideal`);
} else if (imt >= 25.0 && imt <= 29.9) {
  imt = console.log(`Massa ${massa} kg dan ${tinggi} cm is overweight`);
} else if (imt >= 30.0 && imt <= 39.9) {
  imt = console.log(`Massa ${massa} kg dan ${tinggi} cm is very overweight`);
} else {
  imt = console.log(`Massa ${massa} kg dan ${tinggi} cm is obecity`);
}

// no 4
/// bilangan genap %2 = 00
// bilangan ganjil %2 == 1

var genap = [];
var i = 0;
var arrayBilangan = [1, 7, 8, 5, 10, 13, 25, 48, 90, 58, 37];
for (i = 0; i <= arrayBilangan.length; i++) {
  if (arrayBilangan[i] % 2 == 0) {
    genap.push(arrayBilangan[i]);
  }
}
console.log(`Bilangan Array Awal ${arrayBilangan}`);
console.log(`Bilangan genap dari array tersebut ${genap}`);

//no 5
var kalimat = "sungguh hari ini sangat melelahkan";
var Kalimatsplit = kalimat.split(" ");
console.log(kalimat);
console.log(Kalimatsplit);
var splitAray = [Kalimatsplit];
console.table(splitAray);
