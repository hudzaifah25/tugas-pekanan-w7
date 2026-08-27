//====BAB 10 — DATA SANTRI SEBAGAI OBJECT

const santri1 = {
  nama: "Ahmad Fauzi",
  nis: 20250101,
  kelas: "VII-A",
  asalDaerah: "Kediri",
  tanggalMasuk: new Date("2023-07-10"),
  saldoSyahriah: 350000,

  bayarSyahriah(jumlah) {
    this.saldoSyahriah -= jumlah;
    console.log(
      `${this.nama} membayar Rp${jumlah.toLocaleString("id-ID")}, sisa tagihan: Rp${this.saldoSyahriah.toLocaleString("id-ID")}`,
    );
  },

  tampilkanBiodata() {
    console.log("---------------------------");
    console.log(`Nama         : ${this.nama}`);
    console.log(`NIS          : ${this.nis}`);
    console.log(`Kelas        : ${this.kelas}`);
    console.log(`Asal Daerah  : ${this.asalDaerah}`);
    console.log(`Tanggal Masuk: ${this.tanggalMasuk.toDateString()}`);
    console.log(
      `Saldo Syahriah: Rp${this.saldoSyahriah.toLocaleString("id-ID")}`,
    );
    console.log("---------------------------");
  },
};

const santri2 = {
  nama: "Siti Aisyah",
  nis: 20250102,
  kelas: "VII-B",
  asalDaerah: "Ponorogo",
  tanggalMasuk: new Date("2023-07-12"),
  saldoSyahriah: 350000,
  bayarSyahriah(jumlah) {
    this.saldoSyahriah -= jumlah;
    console.log(
      `${this.nama} membayar Rp${jumlah.toLocaleString("id-ID")}, sisa tagihan: Rp${this.saldoSyahriah.toLocaleString("id-ID")}`,
    );
  },
  tampilkanBiodata() {
    console.log("---------------------------");
    console.log(`Nama         : ${this.nama}`);
    console.log(`NIS          : ${this.nis}`);
    console.log(`Kelas        : ${this.kelas}`);
    console.log(`Asal Daerah  : ${this.asalDaerah}`);
    console.log(`Tanggal Masuk: ${this.tanggalMasuk.toDateString()}`);
    console.log(
      `Saldo Syahriah: Rp${this.saldoSyahriah.toLocaleString("id-ID")}`,
    );
    console.log("---------------------------");
  },
};

const santri3 = {
  nama: "Muhammad Rizki",
  nis: 20250103,
  kelas: "VIII-A",
  asalDaerah: "Jombang",
  tanggalMasuk: new Date("2022-06-15"),
  saldoSyahriah: 350000,
  bayarSyahriah(jumlah) {
    this.saldoSyahriah -= jumlah;
    console.log(
      `${this.nama} membayar Rp${jumlah.toLocaleString("id-ID")}, sisa tagihan: Rp${this.saldoSyahriah.toLocaleString("id-ID")}`,
    );
  },
  tampilkanBiodata() {
    console.log("---------------------------");
    console.log(`Nama         : ${this.nama}`);
    console.log(`NIS          : ${this.nis}`);
    console.log(`Kelas        : ${this.kelas}`);
    console.log(`Asal Daerah  : ${this.asalDaerah}`);
    console.log(`Tanggal Masuk: ${this.tanggalMasuk.toDateString()}`);
    console.log(
      `Saldo Syahriah: Rp${this.saldoSyahriah.toLocaleString("id-ID")}`,
    );
    console.log("---------------------------");
  },
};

const santri4 = {
  nama: "Fatimah Zahra",
  nis: 20250104,
  kelas: "VIII-B",
  asalDaerah: "Nganjuk",
  tanggalMasuk: new Date("2022-06-18"),
  saldoSyahriah: 350000,
  bayarSyahriah(jumlah) {
    this.saldoSyahriah -= jumlah;
    console.log(
      `${this.nama} membayar Rp${jumlah.toLocaleString("id-ID")}, sisa tagihan: Rp${this.saldoSyahriah.toLocaleString("id-ID")}`,
    );
  },
  tampilkanBiodata() {
    console.log("---------------------------");
    console.log(`Nama         : ${this.nama}`);
    console.log(`NIS          : ${this.nis}`);
    console.log(`Kelas        : ${this.kelas}`);
    console.log(`Asal Daerah  : ${this.asalDaerah}`);
    console.log(`Tanggal Masuk: ${this.tanggalMasuk.toDateString()}`);
    console.log(
      `Saldo Syahriah: Rp${this.saldoSyahriah.toLocaleString("id-ID")}`,
    );
    console.log("---------------------------");
  },
};

console.log("Dot notation ->", santri1.nama);

const propertiYangDicari = "asalDaerah";
console.log("Bracket notation ->", santri1[propertiYangDicari]);

//===== BAB 11 — MENYIMPAN & MENGITERASI DATA

const daftarSantri = [santri1, santri2, santri3, santri4];

console.log("\n=== BIODATA SELURUH SANTRI (for...of) ===");
for (const santri of daftarSantri) {
  santri.tampilkanBiodata();
}

console.log("\n=== DETAIL PROPERTI santri1 (for...in) ===");
for (const key in santri1) {
  if (typeof santri1[key] !== "function") {
    console.log(`${key} => ${santri1[key]}`);
  }
}

//=====   BAB 12 — VALIDASI & FORMAT DATA

function validasiInputSantri(dataMentah) {
  const namaBersih = dataMentah.nama
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((kata) => kata.length > 0)
    .map((kata) => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(" ");

  const emailNormal = dataMentah.email.trim().toLowerCase();

  const nisNumber = parseInt(dataMentah.nis, 10);
  const saldoNumber = parseFloat(dataMentah.saldoSyahriah);

  const nisString = String(nisNumber);
  const nisValid = nisString.length === 8 && nisString.startsWith("2025");

  const emailValid = emailNormal.includes("@") && emailNormal.includes(".");

  return {
    nama: namaBersih,
    email: emailNormal,
    nis: nisNumber,
    saldoSyahriah: saldoNumber,
    nisValid,
    emailValid,
  };
}

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

console.log("\n=== VALIDASI INPUT SANTRI BARU ===");
const dataMentahBaru = {
  nama: "   budi   santoso   ",
  email: "   BUDI.Santoso@GMAIL.com ",
  nis: "20250199",
  saldoSyahriah: "350000",
};
const hasilValidasi = validasiInputSantri(dataMentahBaru);
console.log(hasilValidasi);
console.log("Saldo terformat:", formatRupiah(hasilValidasi.saldoSyahriah));

//=== BAB 13 — DATA PRIVAT DENGAN CLOSURE

function buatPresensi(namaSantri) {
  let jumlahHadir = 0;
  let jumlahAlpa = 0;

  return {
    catatHadir() {
      jumlahHadir++;
      console.log(`${namaSantri} hadir. Total hadir: ${jumlahHadir}`);
    },
    catatAlpa() {
      jumlahAlpa++;
      console.log(`${namaSantri} alpa. Total alpa: ${jumlahAlpa}`);
    },
    lihatRekap() {
      console.log(
        `Rekap ${namaSantri} -> Hadir: ${jumlahHadir}, Alpa: ${jumlahAlpa}`,
      );
    },
  };
}

console.log("\n=== PRESENSI (CLOSURE) ===");
const presensiAhmad = buatPresensi("Ahmad Fauzi");
presensiAhmad.catatHadir();
presensiAhmad.catatHadir();
presensiAhmad.catatAlpa();
presensiAhmad.lihatRekap();

console.log(
  "Akses langsung presensiAhmad.jumlahHadir =>",
  presensiAhmad.jumlahHadir,
); // undefined

//====== BAB 14 — DATA WAKTU DENGAN DATE OBJECT

function hitungLamaMondok(tanggalMasuk) {
  const sekarang = new Date();
  const selisihMs = sekarang - tanggalMasuk; // pengurangan Date -> milidetik
  const selisihHari = Math.floor(selisihMs / (1000 * 60 * 60 * 24));
  return selisihHari;
}

console.log("\n=== LAMA MONDOK SETIAP SANTRI ===");
for (const santri of daftarSantri) {
  const tanggalRapi = santri.tanggalMasuk.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const lamaHari = hitungLamaMondok(santri.tanggalMasuk);
  console.log(
    `${santri.nama} masuk pada ${tanggalRapi} (sudah ${lamaHari} hari mondok)`,
  );
}

//====   BAB 15 — MENYUSUN & MERINGKAS DATA

function tambahSantriBaru(dataDasar, ...infoTambahan) {
  const santriBaru = {
    ...dataDasar,
    infoTambahan,
  };
  console.log("\nSantri baru ditambahkan:", santriBaru);
  return santriBaru;
}

const santriBaru5 = tambahSantriBaru(
  {
    nama: "Umar Abdullah",
    nis: 20250105,
    kelas: "VII-A",
    asalDaerah: "Blitar",
    tanggalMasuk: new Date("2024-01-08"),
    saldoSyahriah: 350000,
  },
  "Hobi: memanah",
  "Prestasi: juara tahfidz tingkat kabupaten",
  "Catatan wali kelas: rajin dan disiplin",
);

console.log("\n=== RINGKASAN SANTRI (Destructuring) ===");
for (const santri of daftarSantri) {
  const { nama, kelas, saldoSyahriah } = santri;
  console.log(`${nama} (${kelas}) - Tagihan: ${formatRupiah(saldoSyahriah)}`);
}

const salinanDaftarSantri = [...daftarSantri];
salinanDaftarSantri.push(santriBaru5);
console.log("\nJumlah data asli daftarSantri:", daftarSantri.length);
console.log("Jumlah data salinanDaftarSantri:", salinanDaftarSantri.length);

const santriPutra = [santri1, santri3, santriBaru5];
const santriPutri = [santri2, santri4];
const daftarSantriGabungan = [...santriPutra, ...santriPutri];

console.log("\n=== DAFTAR SANTRI GABUNGAN (Putra + Putri) ===");
for (const santri of daftarSantriGabungan) {
  console.log(`- ${santri.nama} (${santri.kelas})`);
}
