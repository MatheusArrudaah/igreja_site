// Menu lateral continua o mesmo
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

openMenu.addEventListener('click', () => {
    sidebar.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('show');
});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !openMenu.contains(e.target)) {
        sidebar.classList.remove('show');
    }
});

// Devocional pop-up

const devocionalBox = document.getElementById('devocional-box');
const popup = document.getElementById('popup-devocional');
const closePopup = document.getElementById('close-popup');

devocionalBox.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Fecha popup se clicar fora do conteúdo
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.add('hidden');
    }
});
