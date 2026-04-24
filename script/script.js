document.addEventListener("DOMContentLoaded", () => {
  const sectionsAnim = document.querySelectorAll('.sessoes');

  const btMenu = document.getElementById('bt-menu')
  const menu = document.getElementById('nav-mobiles')
  const btClose = document.getElementById('bt-close')

  const imgPixel = document.getElementById('euPixel')

  const sectionsNav = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const text = "Augusto B. Chupernate";
  const element = document.getElementById("typingName");

  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!isDeleting) {
      element.textContent = text.substring(0, index++);

      if (index > text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // pausa antes de apagar
        return;
      }
    } else {
      element.textContent = text.substring(0, index--);

      if (index < 0) {
        isDeleting = false;
        index = 0;
      }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();

  const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          link.classList.remove('active');

          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });

      }
    });
  }, {
    threshold: 0.3
  });

  sectionsNav.forEach(section => {
    observerNav.observe(section);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  btMenu.addEventListener('click', () => {
    menu.classList.add('active');
  });

  btClose.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  let waveInterval = null;

  let isWaving = false;

  // função que inicia o loop de animação
  function startWave(cycles = Infinity) {
    if (waveInterval) return;

    isWaving = true;

    let frame = 1;
    let count = 0;

    waveInterval = setInterval(() => {
      imgPixel.src = `./assets/EuPixel-acenando${frame}.png`;

      frame = frame === 1 ? 2 : 1;
      count++;

      if (cycles !== Infinity && count >= cycles * 2) {
        stopWave();
      }

    }, 120);
  }

  // função que para a animação
  function stopWave() {
    clearInterval(waveInterval);
    waveInterval = null;
    isWaving = false;
    imgPixel.src = "./assets/EuPixel-parado.png";
  }

  // 👉 1. animação ao carregar a página
  window.addEventListener('load', () => {
    startWave(4);
  });

  // 👉 2. ao passar o mouse (fica infinito)
  imgPixel.addEventListener('mouseenter', () => {
    startWave();
  });

  // 👉 3. ao sair do mouse (para)
  imgPixel.addEventListener('mouseleave', () => {
    stopWave();
  });

  function blink() {
    function piscar() {

      if (isWaving) {
        setTimeout(piscar, 2000);
        return;
      }

      imgPixel.src = "./assets/EuPixel-piscando.png";

      setTimeout(() => {
        imgPixel.src = "./assets/EuPixel-parado.png";
      }, 120);

      setTimeout(piscar, Math.random() * 4000 + 2000);
    }

    piscar();
  }

  blink()

  // carregar tema salvo
  const themeToggle = document.getElementById('themeToggle');
  const iconContainer = document.getElementById('icon-theme');

  const iconMoon = `
<svg class="bts-modo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="bts-modo lucide lucide-moon-icon lucide-moon">
                    <path
                        d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                </svg>
`;

  const iconSun = `
<svg class="bts-modo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="bts-modo lucide lucide-sun-icon lucide-sun">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                </svg>
`;

  // carregar tema salvo
  // carregar tema salvo
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    iconContainer.innerHTML = iconMoon; // mostra lua
    iconContainer.title = 'Mudar para o modo escuro';
  } else {
    iconContainer.innerHTML = iconSun; // mostra sol
    iconContainer.title = 'Mudar para o modo claro';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');

    const isLight = document.body.classList.contains('light');

    if (isLight) {
      iconContainer.innerHTML = iconMoon; // mostra lua
      localStorage.setItem('theme', 'light');
      iconContainer.title = 'Mudar para o modo escuro';
    } else {
      iconContainer.innerHTML = iconSun; // mostra sol
      localStorage.setItem('theme', 'dark');
      iconContainer.title = 'Mudar para o modo claro';
    }
  });

  const arrows = document.querySelector('.arrows');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // distância do topo (ajuste aqui)
      arrows.classList.add('show');
    } else {
      arrows.classList.remove('show');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  sectionsAnim.forEach(section => {
    observer.observe(section);
  });
});