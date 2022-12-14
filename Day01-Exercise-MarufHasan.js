//no 1
// Write a code to find area of rectangle.
function luasPersegi(sisi) {
  var areaPersegi = Math.pow(sisi, 2);
  return areaPersegi;
}
luasPersegi(8);

//no 2
// Write a code to find perimeter of rectangle.
function kelPer(sisi) {
  var kelilingPersegi = 4 * sisi;
  return kelilingPersegi;
}
kelPer(100);

//no 3
//Write a code to find diameter, circumference and area of a circle.
function diameter(jari) {
  var diameter = jari * 2;
  return diameter;
}
function kelilingLingkaran(jari) {
  var kelilingLingkaran = 2 * (22 / 7) * jari;
  return kelilingLingkaran;
}
function luaslingkaran(jari) {
  var luasLingkaran = (22 / 7) * Math.pow(jari, 2);
  return luasLingkaran;
}

diameter(7);
kelilingLingkaran(7);
luaslingkaran(7);

//no 4
// Write a code to find angles of triangle if two angles are given
function sudut(sudutA, sudutB) {
  var sudutC = 180 - (sudutA + sudutB);
  return sudutC;
}
sudut(34, 90);

// no 5
// te a code to get difference between dates in days.
function bedahari(date1, date2) {
  const beda = date2.getTime() - date1.getTime();
  const totalbedaHari = Math.ceil(beda / (24 * 60 * 60 * 1000));
  return totalbedaHari;
}
const date1 = new Date("2015-08-10");
const date2 = new Date("2015-08-12");
bedahari(date1, date2);

//no 6
function hariConversi(totalhari) {
  var tahun = Math.floor(totalhari / 365);
  var sisahari = totalhari % 365;
  var bulan = Math.floor(sisahari / 30);
  var hari = sisahari % 30;
  var hasil = `${totalhari} hari :  ${tahun} tahun, ${bulan} bulan, ${hari} hari`;
  return hasil;
}

hariConversi(900);

module.exports = {
  luasPersegi,
  kelPer,
  diameter,
  kelilingLingkaran,
  luaslingkaran,
  sudut,
  bedahari,
  hariConversi,
};
