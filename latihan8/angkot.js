var jmlhAngkot = 10;

for (var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++) {
    if (noAngkot === 5) {
        console.log("Angkot No. "+noAngkot+" sedang lembur.")
    } else if (noAngkot <= 6) {
        console.log("Angkot No. "+noAngkot+" beroperasi dengan baik.")
    } else if ( noAngkot === 8 || noAngkot === 10) {
        console.log("Angkot No. "+noAngkot+" sedang lembur.")
    } else {
        console.log("Angkot No. "+noAngkot+" sedang tidak beroperasi.")
    }
}