async function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { alert("Login Gagal: " + error.message); }
    else { window.location.href = 'dashboard.html'; }
}

async function register() {
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const username = document.getElementById('reg-username').value;
    const kelas = document.getElementById('reg-kelas').value;
    const absen = document.getElementById('reg-absen').value;

    const { error } = await supabase.auth.signUp({
        email, password,
        options: { data: { username, kelas, absen } }
    });

    if (error) { alert("Registrasi Gagal: " + error.message); }
    else { alert("Registrasi berhasil! Silakan login."); window.location.href = 'index.html'; }
}

async function logout() {
    await supabase.auth.signOut();
    window.location.href = 'index.html';
}
