function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil = hasil + arguments[i];
  }
  return hasil;
}

var coba = tambah(2, 5, 6, 7, 8);
console.log(coba);
