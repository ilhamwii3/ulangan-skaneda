async function loadNilaiSiswa() {
    // Simulasi data nilai
    const tbody = document.getElementById('table-nilai');
    if(tbody) {
        tbody.innerHTML = `
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">Ujian Matematika</td>
                <td style="padding: 8px; border: 1px solid #ddd;">85</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Lulus</td>
            </tr>
        `;
    }
}
