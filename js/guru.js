async function simpanSoal(event) {
    event.preventDefault();
    const mapel = document.getElementById('soal-mapel').value;
    const pertanyaan = document.getElementById('soal-pertanyaan').value;
    const opsi_a = document.getElementById('opsi-a').value;
    const opsi_b = document.getElementById('opsi-b').value;
    const opsi_c = document.getElementById('opsi-c').value;
    const opsi_d = document.getElementById('opsi-d').value;
    const kunci = document.getElementById('soal-kunci').value;

    // Karena tabel questions belum dibuat di SQL, ini akan error jika dijalankan. 
    // Fokus saat ini: memastikan form berfungsi.
    showToast("Fungsi simpan soal siap (Tabel questions perlu dibuat di Supabase)");
    document.getElementById('form-soal').reset();
}

async function buatUjian(event) {
    event.preventDefault();
    showToast("Fungsi buat ujian siap (Tabel exams perlu dibuat di Supabase)");
    document.getElementById('form-ujian').reset();
}
