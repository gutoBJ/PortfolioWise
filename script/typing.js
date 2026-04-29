export function initTyping() {
  const text = "Augusto B. Chupernate";
  const element = document.getElementById("typingName");

  if (!element) return;

  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!isDeleting) {
      element.textContent = text.substring(0, index++);

      if (index > text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
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
}