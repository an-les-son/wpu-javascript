// let tesName = (nama) =>
//   //   alert("Halo " + nama);
//   `Halo ${nama}`;

// let n = prompt("siapa kamu ?");
// console.log(tesName(n));

// let mahasiswa = ["anjar", "oki", "wibowo"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

// let jumlahHurufDua = mahasiswa.map((nama) => ({ nama, jumlahHuruf: nama.length }));

// console.table(jumlahHurufDua);

const mhs1 = function () {
  this.nama = "anjar";
  this.umur = 31;
  this.sayHello = function () {
    return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`;
  };
  //   sayHello: () => `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`,
  // setInterval(() => {
  //   console.log(this.umur++);
  // }, 500);
};

const anjar = new mhs1();
console.log(anjar.sayHello());
