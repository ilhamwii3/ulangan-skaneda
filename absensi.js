async function isiAbsensi(status) {
    const user = (await supabase.auth.getUser()).data.user;
    const today = new Date().toISOString().split('T')[0];

    // Simulasi simpan absensi
    showToast(`Absensi '${status.toUpperCase()}' berhasil dicatat untuk hari ini!`);
}
