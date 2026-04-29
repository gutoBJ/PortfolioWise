export function initPixelAnimation() {
  const imgPixel = document.getElementById('euPixel');

  if (!imgPixel) return;

  let waveInterval = null;
  let isWaving = false;

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

  function stopWave() {
    clearInterval(waveInterval);
    waveInterval = null;
    isWaving = false;
    imgPixel.src = "./assets/EuPixel-parado.png";
  }

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

  window.addEventListener('load', () => {
    startWave(4);
  });

  imgPixel.addEventListener('mouseenter', startWave);
  imgPixel.addEventListener('mouseleave', stopWave);

  blink();
}