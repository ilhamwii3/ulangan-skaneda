// 1. Menampilkan alert untuk tes
alert("File config.js berhasil dimuat!");

// 2. Isi URL dan Key (Pastikan hanya ada SATU SUPABASE_URL)
const SUPABASE_URL = "https://olmzbdessiorlnsaeeyc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_uedxzKuzJhfq9ATWVdEcCg_O5ahOyhm";

// 3. Peringatan jika belum diisi
if(SUPABASE_URL.includes("ISI_")) {
    alert("Peringatan: Anda belum mengisi URL dan Key Supabase di js/config.js!");
}

// 4. Inisialisasi Supabase (Cukup gunakan baris ini)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
