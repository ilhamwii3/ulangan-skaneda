function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.style.position = 'fixed'; toast.style.bottom = '20px'; toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)'; toast.style.padding = '10px 20px';
    toast.style.borderRadius = '5px'; toast.style.color = '#fff'; toast.style.zIndex = '9999';
    toast.style.backgroundColor = type === 'success' ? '#27ae60' : '#e74c3c';
    toast.innerText = message; document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function confirmDelete() {
    const input = prompt("Ketik 'HAPUS' untuk mengonfirmasi tindakan ini:");
    return input === 'HAPUS';
}
