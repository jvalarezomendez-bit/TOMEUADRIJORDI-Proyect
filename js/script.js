function toggleModo() {
    document.body.classList.toggle('dark-mode');
    var btn = document.getElementById('btnModo');
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = '☀️ Modo Claro';
    } else {
        btn.textContent = '🌙 Modo Oscuro';
    }
}
