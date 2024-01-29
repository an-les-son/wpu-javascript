var angka = [3, 4, 1, 2, 6, 5, 7, 8, 9, 5, 5, 5];

// console.log(angka.join(" - "));

// angka.sort();
// console.log(angka.join(" - "));

// angka.forEach(function (e, i) {
//   console.log(e, i + 1);
// });

// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

// fiter method
// var angka2 = angka.filter(function (e) {
//   return e >= 5;
// });

// console.log(angka2.join(" - "));

var angka2 = angka.find(function (e) {
  return e < 5;
});

console.log(angka2);

// var angka2 = angka.map(function (e) {
//   return e * 2;
// });

// console.log(angka2.join(" - "));
