const {
  suhu,
  cekGenapGanjil,
  primeTest,
  sumTotal,
  faktorial,
  fibonanci,
} = require("./Day02-Exercise-MarufHasan.js");

//
test("Test suhu C ke F function", () => {
  // Correct
  expect(suhu(100)).toBe(212);
});
test("Test genap ganjil function", () => {
  // Correct
  expect(cekGenapGanjil(22)).toBe("bilangan 22 adalah genap");
});
test("Test prima function", () => {
  // Correct
  expect(primeTest(67)).toBe("prima");
});
test("Test total bilangan function", () => {
  // Correct
  expect(sumTotal(10)).toBe(55);
});
test("Test faktorial function", () => {
  // Correct
  expect(faktorial(5)).toBe(120);
});
test("Test fibonannci function", () => {
  // Correct
  expect(fibonanci(19)).toBe(6765);
});

//
