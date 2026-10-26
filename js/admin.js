async function loadAdminDashboard() {
    const { count: totalSiswa } = await supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'siswa');
    const { count: totalGuru } = await supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'guru');
    
    if(document.getElementById('stat-siswa')) document.getElementById('stat-siswa').innerText = totalSiswa || 0;
    if(document.getElementById('stat-guru')) document.getElementById('stat-guru').innerText = totalGuru || 0;

    const { data: users } = await supabase.from('profiles').select('*').order('created_at', { ascending: false });
    const tbody = document.getElementById('table-users');
    if(tbody) {
        tbody.innerHTML = '';
        users.forEach(user => {
            tbody.innerHTML += `
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">${user.username}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${user.email}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${user.kelas}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${user.absen}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${user.role}</td>
                    <td style="padding: 8px; border: 1px solid #ddd;"><button class="btn btn-danger" style="padding: 4px; font-size: 0.8rem;" onclick="hapusUser('${user.id}')">Hapus</button></td>
                </tr>`;
        });
    }
}

async function hapusUser(id) {
    if(confirmDelete()) {
        const { error } = await supabase.from('profiles').delete().eq('id', id);
        if(error) showToast("Gagal menghapus user", "error");
        else { showToast("User dihapus"); loadAdminDashboard(); }
    }
}
