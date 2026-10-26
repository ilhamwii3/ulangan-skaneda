async function loadDashboard() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { window.location.href = 'index.html'; return; }

    const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    if (!profile) return;

    document.getElementById('welcome-text').innerText = `Halo, ${profile.username}`;
    document.getElementById('email-text').innerText = profile.email;
    document.getElementById('username-text').innerText = profile.username;
    document.getElementById('kelas-text').innerText = profile.kelas;
    document.getElementById('absen-text').innerText = profile.absen;
    document.getElementById('role-text').innerText = profile.role.toUpperCase();

    if (profile.role === 'siswa') document.getElementById('menu-siswa').style.display = 'block';
    if (profile.role === 'guru') document.getElementById('menu-guru').style.display = 'block';
    if (profile.role === 'admin') {
        document.getElementById('menu-admin').style.display = 'block';
        document.getElementById('menu-guru').style.display = 'block';
    }
}
loadDashboard();
