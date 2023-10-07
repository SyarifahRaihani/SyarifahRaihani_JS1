// Contoh penggunaan if, else, dan nested if
var nilai = 75;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}


// Contoh penggunaan switch case
var hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin.");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa.");
    break;
  case "Rabu":
    console.log("Hari ini adalah Rabu.");
    break;
  default:
    console.log("Hari ini adalah hari lain.");
}


// Contoh penggunaan for statement
for (var i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}


// Contoh penggunaan while dan do while
var angka = 1;

while (angka <= 5) {
  console.log("Nilai angka: " + angka);
  angka++;
}

var x = 1;
do {
  console.log("Nilai x: " + x);
  x++;
} while (x <= 5);


// Contoh penggunaan function
function tambah(a, b) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}

let hasilTambah = tambah(3, 4);
let hasilKali = kali(2, 5);

console.log("Hasil Penambahan: " + hasilTambah);
console.log("Hasil Perkalian: " + hasilKali);
