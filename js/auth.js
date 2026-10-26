async function login() {
    try {
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        if (!email || !password) { alert("Email dan password wajib diisi."); return; }

        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) { alert("Login Gagal: " + error.message); }
        else { window.location.href = 'dashboard.html'; }
    } catch (err) {
        alert("Terjadi kesalahan: " + err.message);
    }
}

async function register() {
    try {
        const email = document.getElementById('reg-email').value.trim();
        const password = document.getElementById('reg-password').value;
        const username = document.getElementById('reg-username').value.trim();
        const kelas = document.getElementById('reg-kelas').value;
        const absen = document.getElementById('reg-absen').value;

        if (!username || !email || !password || !kelas || !absen) {
            alert("Semua kolom wajib diisi.");
            return;
        }
        if (password.length < 6) {
            alert("Password minimal 6 karakter.");
            return;
        }

        const { error } = await supabase.auth.signUp({
            email, password,
            options: { data: { username, kelas, absen } }
        });
