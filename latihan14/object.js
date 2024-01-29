var mhs = {
  nama: "anjar oki wibowo",
  umur: "31",
  ipk: [3.0, 2.5, 3.2],
  alamat: {
    jalan: "Jl. komodo no.60",
    kota: "Bekasi",
    provinsi: "Jawa Barat",
  },
};

console.log(mhs.ipk[2] + " " + mhs.alamat.kota);

function buatObjectMhs(nama, umur, ipk, alamat) {
  var Mhs = {};
  Mhs.nama = nama;
  Mhs.umur = umur;
  Mhs.ipk = ipk;
  Mhs.alamat = alamat;
  return Mhs;
}

var mhs2 = buatObjectMhs("budi", "32", "3.30", "Bekasi");

function Mahasiswa(nama, nrp, ipk, alamat) {
  this.nama = nama;
  this.nrp = nrp;
  this.ipk = ipk;
  this.alamat = alamat;
}

var mhs4 = new Mahasiswa("Bagas", "2100093123", 3.2, "Bekasi");
