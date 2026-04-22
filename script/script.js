const btMenu = document.getElementById('menu')
const menu = document.getElementById('nav-mobiles')
const btClose = document.getElementById('close')

btMenu.addEventListener('click', () => {
    menu.style.display = 'flex'
    btMenu.style.visibility = 'hidden'
})

btClose.addEventListener('click', () => {
    menu.style.display = 'none'
    btMenu.style.visibility = 'visible'
})

const textElement = document.getElementById("typewriter");

const words = [
  "Lorenzo Carneiro Andreoli",
  "Backend Engineer",
  "Cloud Practitioner",
  "Full Stack Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    textElement.textContent = currentWord.substring(0, letterIndex++);
  } else {
    textElement.textContent = currentWord.substring(0, letterIndex--);
  }

  let speed = isDeleting ? 40 : 80;


  if (letterIndex === currentWord.length + 1) {
    isDeleting = true;
    speed = 1200;
  }


  if (letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
