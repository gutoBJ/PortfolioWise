export function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const iconContainer = document.getElementById('icon-theme');

  if (!themeToggle || !iconContainer) return;

  const iconMoon = `
    <svg class="bts-modo" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
    </svg>
  `;

  const iconSun = `
    <svg class="bts-modo" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2"/>
      <path d="M12 20v2"/>
      <path d="M4.93 4.93l1.41 1.41"/>
      <path d="M17.66 17.66l1.41 1.41"/>
      <path d="M2 12h2"/>
      <path d="M20 12h2"/>
      <path d="M6.34 17.66l-1.41 1.41"/>
      <path d="M19.07 4.93l-1.41 1.41"/>
    </svg>
  `;

  function applyTheme() {
    const isLight = localStorage.getItem('theme') === 'light';

    document.body.classList.toggle('light', isLight);

    if (isLight) {
      iconContainer.innerHTML = iconMoon;
      iconContainer.title = 'Mudar para o modo escuro';
    } else {
      iconContainer.innerHTML = iconSun;
      iconContainer.title = 'Mudar para o modo claro';
    }
  }

  applyTheme();

  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');

    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    applyTheme();
  });
}