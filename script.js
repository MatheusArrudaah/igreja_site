const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

openMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebar.classList.add('show');
});

closeMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebar.classList.remove('show');
});

document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !openMenu.contains(e.target)) {
    sidebar.classList.remove('show');
  }
});

// Devocional
const devocionalBox = document.getElementById('devocional-box');
const popup = document.getElementById('popup-devocional');
const closePopup = document.getElementById('close-popup');

if (devocionalBox && popup && closePopup) {
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
}
