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
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    chk.checked = true;
  }

  // salvar mudança
  chk.addEventListener('change', () => {
    if (chk.checked) {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
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