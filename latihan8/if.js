var jmlAngkot = 10;
var angkotBeroperasi = 5;
var noAngkot = 1;

for (var i = noAngkot; i <= jmlAngkot; i++) {
  if (i <= angkotBeroperasi) {
    console.log("Angkot No. " + i + " beroperasi baik.");
  } else {
    console.log("Angkot No. " + i + " sedang tidak beroperasi.");
  }
}
