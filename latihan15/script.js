// obect literal
// let mahasiswa1 = {
//   nama: "anjar",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
// };

// let mahasiswa2 = {
//   nama: "rudi",
//   energi: 15,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
// };

// function declaration

const methodMahasiswa = {
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  },
  main: function (jam) {
    this.energi = this.energi - jam;
    console.log(`Halo ${this.nama} selamat bermain`);
  },
  tidur: function (jam) {
    this.energi = this.energi + jam * 2;
    console.log(`Halo ${this.nama} selamat tidur`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let anjar = Mahasiswa("anjar", 50);
let bobo = Mahasiswa("bobo", 2);

// // constructor function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   };

//   this.main = function (jam) {
//     this.energi = this.energi - jam;
//     console.log(`Halo ${this.nama} selamat bermain`);
//   };
// }

// let anjar = new Mahasiswa("anjar", 50);
// let bobo = new Mahasiswa("bobo", 2);
