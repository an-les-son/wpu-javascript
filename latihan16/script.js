// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama} selamat makan`);
//   },
//   main: function (jam) {
//     this.energi = this.energi - jam;
//     console.log(`Halo ${this.nama} selamat main`);
//   },
//   tidur: function (jam) {
//     this.energi = this.energi + jam * 2;
//     console.log(`Halo ${this.nama} selamat tidur`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi = this.energi + porsi;
//   return `Halo ${this.nama} selamat makan`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi = this.energi - jam;
//   return `Halo ${this.nama} selamat main`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi = this.energi + jam * 2;
//   return `Halo ${this.nama} selamat tidur`;
// };

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi = this.energi + porsi;
    return `Halo ${this.nama} selamat makan`;
  }

  main(jam) {
    this.energi = this.energi - jam;
    return `Halo ${this.nama} selamat main`;
  }

  tidur(jam) {
    this.energi = this.energi + jam * 2;
    return `Halo ${this.nama} selamat tidur`;
  }
}

let anjar = new Mahasiswa("anjar", 10);
let dika = new Mahasiswa("dika", 10);
