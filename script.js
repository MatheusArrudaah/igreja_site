const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

// ABRIR MENU
openMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebar.classList.add('show');
  sidebar.classList.remove('hidden');
});

// FECHAR MENU COM BOTÃO
closeMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebar.classList.remove('show');
  sidebar.classList.add('hidden');
});

// FECHAR MENU CLICANDO FORA
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !openMenu.contains(e.target)) {
    sidebar.classList.remove('show');
    sidebar.classList.add('hidden');
  }
});

// DEVOCIONAL POP-UP
const devocionalBox = document.getElementById('devocional-box');
const popup = document.getElementById('popup-devocional');
const closePopup = document.getElementById('close-popup');

devocionalBox.addEventListener('click', () => {
  popup.classList.remove('hidden');
  devocionalBox.setAttribute('aria-pressed', 'true');
});

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
  devocionalBox.setAttribute('aria-pressed', 'false');
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.add('hidden');
    devocionalBox.setAttribute('aria-pressed', 'false');
  }
});
