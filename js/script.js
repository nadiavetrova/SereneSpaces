
const menuToggle = document.querySelector('.menuToggle');
const headerMenu = document.querySelector('.headerMenu');


menuToggle.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
});