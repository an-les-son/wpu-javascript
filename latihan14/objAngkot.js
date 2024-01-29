function Angkot(supir, trayek, penumpang, kas) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.leght === 0) {
      alert("angkot masih kosong");
      return false;
    }
    for (var i = 0; i < this.penumpang; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas = this.kas + bayar;
        return this.penumpang;
      } else {
        alert(namaPenumpang + " this ada didalam");
        return false;
      }
    }
  };
}

var angkot = new Angkot("Anjar", ["kranji", "pondok kelapa", "celilitan"], [], 0);
