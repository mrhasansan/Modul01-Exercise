const {
  luasPersegi,
  kelPer,
  diameter,
  kelilingLingkaran,
  luaslingkaran,
  sudut,
  bedahari,
  hariConversi,
} = require("./Day01-Exercise-MarufHasan.js");

test("Test luas Persegi function", () => {
  // Correct
  expect(luasPersegi(8)).toBe(64);
});
test("Test keliling persegi function", () => {
  // Correct
  expect(kelPer(100)).toBe(400);
});
test("Test diameter function", () => {
  // Correct
  expect(diameter(7)).toBe(14);
});
test("Test keliling Lingkaran function", () => {
  // Correct
  expect(kelilingLingkaran(7)).toBe(44);
});
test("Test Luas Lingkaran function", () => {
  // Correct
  expect(luaslingkaran(7)).toBe(154);
});
test("Test Sudut segitiga function", () => {
  // Correct
  expect(sudut(34, 90)).toBe(56);
});
test("Test beda hari function", () => {
  // Correct
  const date1 = new Date("2015-08-10");
  const date2 = new Date("2015-08-12");
  expect(bedahari(date1, date2)).toBe(2);
});
test("Test hari konvesi function", () => {
  // Correct
  expect(hariConversi(900)).toBe("900 hari :  2 tahun, 5 bulan, 20 hari");
});
