//no 1

var sisi = 100;
var areaPersegi = Math.pow(sisi, 2);
var hasilAreaPersegi = `Hasil luas persegi dengan sisi ${sisi} satuan adalah ${areaPersegi} satuanpersegi`;
console.log(hasilAreaPersegi);

//no 2
var kelilingPersegi = 4 * sisi;
var hasilKelilingPersegi = `Hasil Keliling persegi dengan sisi ${sisi} satuan adalah ${kelilingPersegi} satuan`;
console.log(hasilKelilingPersegi);

//no 3
var jari = 90;
var diameter = jari * 2;
var hasilDiameter = `Dimater lingkaran dengan jari-jari ${jari} satuan adalah ${diameter} satuan`;
console.log(hasilDiameter);
var kelilingLingkaran = 2 * (22 / 7) * jari;
var hasilKelilingLingkaran = `keliling lingkaran dengan jari-jari ${jari} satuan adalah ${kelilingLingkaran} satuan`;
console.log(hasilKelilingLingkaran);
var luasLingkaran = (22 / 7) * Math.pow(jari, 2);
var hasilLuasLingkaran = `Luas lingkaran dengan jari-jari ${jari} satuan adalah ${kelilingLingkaran} satuan`;
console.log(hasilLuasLingkaran);

//no 4
var sudutA = 76;
var sudutB = 10;
var sudutC = 180 - (sudutA + sudutB);
var HasilSudut = `Besar sudut C segitiga ABC dengan sudut A = ${sudutA} derajat dan sudut B = ${sudutB} derajat adalah ${sudutC} derajat`;
console.log(HasilSudut);

//no 5
var totalhari = 1900;
var tahun = Math.floor(totalhari / 365);
var sisahari = totalhari % 365;
var bulan = Math.floor(sisahari / 30);
var hari = sisahari % 30;
var hasil = `Total  ${totalhari}  hari sama dengan ${tahun} tahun, ${bulan} bulan, ${hari} hari`;
console.log(hasil);
