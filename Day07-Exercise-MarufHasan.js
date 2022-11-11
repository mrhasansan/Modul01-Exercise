// No 1 create a function to check if two objects are equal  value dan keynya
let objectA = {
  name: "cinta",
  alamat: 1,
};
let objectB = {
  name: "cinta",
  alamat: 1,
};
function equalObject(objectA, objectB) {
  const keysA = Object.keys(objectA);
  const keysB = Object.keys(objectB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let key of keysA) {
    if (objectA[key] !== objectB[key]) {
      return false;
    }
  }
  return true;
}
console.log(equalObject(objectA, objectB));

//No 2 create function to get the intersection of two objects
// exampe input : { a:1, b:2 } & {a: 1, c: 3}
// output (a:1)
// output yang keluar [1]
let input1 = {
  a: 1,
  b: 2,
};
let input2 = {
  a: 1,
  b: 3,
};
let ArrKeyOb1 = Object.keys(input1);
let ValKeyOb1 = Object.values(input1);
let ArrKeyOb2 = Object.keys(input2);
let ValKeyOb2 = Object.values(input2);
function intersection(key, value, index) {
  key = ArrKeyOb1.filter((key) => ArrKeyOb2.includes(key));
  value = ValKeyOb1.filter((value) => ValKeyOb2.includes(value));
  return key, value;
}
console.log(intersection(input1, input2));

//// no 3 create a function to merge two array data and remove duplicate data nama &email
let memberA = [
  { nama: "student1", email: "student1@mail.com" },
  { nama: "student2", email: "student2@mail.com" },
];
let memberB = [
  { nama: "student1", email: "student1@mail.com" },
  { nama: "student3", email: "student3@mail.com" },
];
let memberAB = [...memberA, ...memberB];
console.log(memberAB);

let newArray = memberAB.map((m) => [m.nama, m]);
let newMap = new Map(newArray);
let iterasi = newMap.values();
let hasilmember = [...iterasi];

console.log(hasilmember);

//no 4 create a function that can accept input as an array as an objects and switch all value into property and property into value
// masih dalam bentuk objeck belum array.
let Arrinput = { name: "Hasan", age: 25 };

let NewArrayinput = {};
Object.entries(Arrinput).forEach((entry) => {
  let key = entry[0];
  let value = entry[1];
  NewArrayinput[value] = [key];
});
console.log(NewArrayinput);

//No 5 function factorial number
function factorial(number) {
  if (number < 0) return -1;
  else if (number == 0) return 1;
  else {
    return number * factorial(number - 1);
  }
}
var hasilfactorial = factorial(5);
console.log(hasilfactorial);
