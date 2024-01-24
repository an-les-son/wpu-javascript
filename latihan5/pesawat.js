var no_pesawat = 1;
var kondisi = "";

while (no_pesawat <= 20) {
  kondisi = confirm("Apakah konisi pesawat baik ?");
  if (kondisi == true) {
    var hkondisi = "baik";
  } else {
    var hkondisi = "buruk";
  }
  console.log("No. Pesawat " + no_pesawat + " dalam keadaan " + hkondisi);
  no_pesawat++;
}
