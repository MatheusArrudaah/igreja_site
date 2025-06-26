const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

openMenu.addEventListener('click', () => {
    sidebar.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('show');
});

// Fecha o menu se clicar fora dele
document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('show') && !sidebar.contains(e.target) && !openMenu.contains(e.target)) {
        sidebar.classList.remove('show');
    }
});
