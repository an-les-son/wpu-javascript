// menangkap pilihan player
var pilih = prompt("Ketikan pilihan mu : \n (Cth : Gunting, Batu, Kertas)");

// menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random();

//menentukan rules
if (comp < 0.34) {
  comp = "Gunting";
} else if (comp >= 0.34 && comp < 0.67) {
  comp = "Batu";
} else {
  comp = "Kertas";
}
console.log("Player : " + pilih);
console.log("Computer : " + comp + "\n");

//tampilan hasilnya
var hasil = "";

if (pilih == comp) {
  hasil = "Draw";
} else if (pilih == "Gunting") {
  hasil = comp == "Kertas" ? "Player Win" : "Computer Win";
} else if (pilih == "Batu") {
  hasil = comp == "Gunting" ? "Player Win" : "Computer Win";
} else if (pilih == "Kertas") {
  hasil = comp == "Batu" ? "Player Win" : "Computer Win";
}
console.log("\n");
console.log(hasil);
alert("Player : " + pilih + "\nComputer : " + comp + "\n\n" + hasil);
