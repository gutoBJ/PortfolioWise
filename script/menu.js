export function initMenu() {
  const btMenu = document.getElementById('bt-menu');
  const menu = document.getElementById('nav-mobiles');
  const btClose = document.getElementById('bt-close');

  btMenu.addEventListener('click', () => {
    menu.classList.add('active');
  });

  btClose.addEventListener('click', () => {
    menu.classList.remove('active');
  });
}