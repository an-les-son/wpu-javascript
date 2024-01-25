function volumeKubus(s) {
  var vKubus;
  vKubus = s * s * s;

  return vKubus;
}

var sA = parseInt(prompt("Sisi kubus A"));
var sB = parseInt(prompt("Sisi kubus B"));

var vKubusA = volumeKubus(sA);
var vKubusB = volumeKubus(sB);

console.log("Sisi kubus A = 8 \nVolume kubus A = " + vKubusA);
console.log("Sisi kubus B = 3 \nVolume kubus B = " + vKubusB);
var totalVolume = vKubusA + vKubusB;

console.log("Total pemjumalahn antara kedua kubus = " + totalVolume);

function penjumlahan(a, b) {
  var totalJumlah;
  totalJumlah = a + b;

  return totalJumlah;
}

var a = vKubusA;
var b = vKubusB;

alert("Hasil penjumalah dari " + a + " + " + b + "\n" + penjumlahan(a, b));
