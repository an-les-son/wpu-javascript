var jmlAngkot = 10;
var angkotBeroperasi = 9;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  noAngkot++;
}

for (var i = noAngkot; i > angkotBeroperasi && i <= jmlAngkot; i++) {
  console.log("Angkot No. " + i + " sedang tidak beroperasi.");
}
