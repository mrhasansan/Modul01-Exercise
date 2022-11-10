//no 1 Nb : Umur belum baru score

var arrStudents = [
  {
    nama: "alam",
    email: "alamsky@gmail.com",
    born: "2000 - 08 - 20",
    age: 89,
    score: 87,
  },
  {
    nama: "hasan",
    email: "hasan@gmail.com",
    born: "1990 - 08 - 20",
    age: 45,
    score: 90,
  },
  {
    nama: "nikho",
    email: "nikho@gmail.com",
    born: "1997 - 08 - 20",
    age: 58,
    score: 79,
  },
];
function hitung(arr) {
  let score = { highest: null, lowest: null, average: null };

  for (let x of arr) {
    if (score.highest == null || score.highest.score < x.score) {
      score.highest = x;
    }
    if (score.lowest == null || score.lowest.score > x.score) {
      score.lowest = x;
    }
    score.average += x.score;
  }
  score.average = score.average / arr.length;
  console.log(score);
}
hitung(arrStudents);

//// no 2

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
var apel = new Product("apel", 3000, 3);
var jeruk = new Product("jeruk", 18000, 90);
console.log(apel, jeruk);

class Transaction {
  constructor(total, product) {
    this.total = 0;
    this.totalproduct = [];
  }
  add(barang) {
    this.totalproduct.push(barang);
  }
  show(total) {
    totalproduct.forEach((beli) => {
      console.log(
        `beli ${beli.name} sebanyak ${beli.quantity} dengan total harga ${
          beli.quantity * beli.price
        } `
      );
    });
  }
  chekkOut(final) {
    totalproduct.forEach((beli) => {
      this.total = this.total + final.quantity * beli.price;
      console.log(
        `beli ${beli.name} sebanyak ${beli.quantity} dengan total harga ${
          beli.quantity * beli.price
        }`
      );
    });
  }
  return;
}
