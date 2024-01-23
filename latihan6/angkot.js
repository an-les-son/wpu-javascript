var noAngkot = 1;
var jmlhAngkot = 10;

for (noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++) {
    if (noAngkot <= 6) {
        console.log("Angkot No. "+ noAngkot+" beroperasi dengan baik.")
    } else if ( noAngkot > 6 && noAngkot == 8 ) {
        console.log("Angkot No. "+ noAngkot+" sedang lembur.")
    } else {
        console.log("Angkot No. "+noAngkot+" sedang tidak beroperasi.")
    }
    
}