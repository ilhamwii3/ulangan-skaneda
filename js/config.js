alert("File config.js berhasil dimuat!");

const SUPABASE_URL = "https://olmzbdessiorlnsaeeyc.supabase.co";
// ... (sisanya biarkan sama)

const SUPABASE_URL = "https://olmzbdessiorlnsaeeyc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_uedxzKuzJhfq9ATWVdEcCg_O5ahOyhm";

if(SUPABASE_URL.includes("ISI_")) {
    alert("Peringatan: Anda belum mengisi URL dan Key Supabase di js/config.js!");
}

const { createClient } = window.supabase;
window.supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
