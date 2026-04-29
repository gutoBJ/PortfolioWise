export function initNavigation() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerNav = new IntersectionObserver((entries) => {
    let visibleSection = null;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visibleSection = entry.target.id;
      }
    });

    if (visibleSection) {
      navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${visibleSection}`) {
          link.classList.add('active');
        }
      });
    }
  }, {
    threshold: 0.2,
    rootMargin: "-80px 0px -60% 0px"
  });

  sections.forEach(section => observerNav.observe(section));

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}