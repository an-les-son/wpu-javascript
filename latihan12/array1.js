var hari = ["senin", "selasa", "rabu", "kamis", "jum'at", "sabtu", "minggu"];

// hari.pop();

// for (var i = 0; i < hari.length; i++) {
//   console.log(hari[i]);
// }
var hari2 = hari.slice(3, 4);
console.log(hari.join(" - "));

hari2.unshift("senin");
hari2.push("kamis");
console.log(hari2.join(" - "));
