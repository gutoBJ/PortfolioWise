export function initScrollEffects() {
  const header = document.querySelector('header');
  const arrows = document.querySelector('.arrows');

  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }

    if (arrows) {
      arrows.classList.toggle('show', window.scrollY > 300);
    }
  });
}