function hitungRataRata() {
  const nilaiMTK = document.querySelector("#nilai-matematika").value;
  const nilaiBINDO = document.querySelector("#nilai-bahasa-indonesia").value;
  const nilaiBING = document.querySelector("#nilai-bahasa-inggris").value;
  const rataRata =
    (parseInt(nilaiMTK) + parseInt(nilaiBINDO) + parseInt(nilaiBING)) / 3;
  document.querySelector("#rata-rata").value = rataRata;

  const predikat = document.querySelector("#rata-rata").value;
  if (predikat >= 80) {
    document.querySelector("#predikat").value = "A";
  } else if (rataRata >= 60) {
    document.querySelector("#predikat").value = "B";
  } else if (rataRata >= 40) {
    document.querySelector("#predikat").value = "C";
  } else if (rataRata >= 20) {
    document.querySelector("#predikat").value = "D";
  } else {
    document.querySelector("#predikat").value = "E";
  }

    return rataRata, predikat;
}


const kehadiran = document.querySelector("#kehadiran");
const keterangan = document.querySelector("#keterangan");
kehadiran.addEventListener("change", function () {
  if (kehadiran.checked) {
    keterangan.innerText = "Hadir";
  } else {
    keterangan.innerText = "Tidak Hadir";
  }
});


document.querySelector("#submit").addEventListener("click", function () {
  var nis = document.querySelector("#nis").value;
  var nama = document.querySelector("#nama").value;
  var kehadiran = document.querySelector("#kehadiran").checked;
  var keterangan = kehadiran ? "Hadir" : "Tidak Hadir";

  var table = document.querySelector("#table");
  table.innerHTML += `
    <tr>
      <td>${nis}</td>
      <td>${nama}</td>
      <td>${keterangan}</td>
    </tr>
  `;

  document.querySelector("#nis").value = "";
  document.querySelector("#nama").value = "";
  document.querySelector("#kehadiran").checked = false;
  document.querySelector("#keterangan").innerText = "Tidak Hadir";
})