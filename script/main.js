import { initMenu } from './menu.js';
import { initTheme } from './theme.js';
import { initTyping } from './typing.js';
import { initNavigation } from './navigation.js';
import { initPixelAnimation } from './pixelAnimation.js';
import { initScrollEffects } from './scrollEffects.js';
import { initSectionObserver } from './sectionObserver.js';
import { overlayCards } from './overlayCards.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initTheme();
  initTyping();
  initNavigation();
  initPixelAnimation();
  initScrollEffects();
  initSectionObserver();
  overlayCards();
});