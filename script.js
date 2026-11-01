const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const mobileMenu = window.matchMedia('(max-width:850px)');
const pageContent = [document.querySelector('main'), document.querySelector('.site-footer')].filter(Boolean);
function setMenu(open, returnFocus = false) {
  if (!nav || !menuToggle) return;
  nav.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  pageContent.forEach(element => { element.inert = open && mobileMenu.matches; });
  if (open) nav.querySelector('a')?.focus();
  else if (returnFocus) menuToggle.focus();
}
menuToggle?.addEventListener('click', () => setMenu(!nav.classList.contains('open'), true));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
mobileMenu.addEventListener('change', () => setMenu(false));
document.addEventListener('keydown', event => {
  if (!mobileMenu.matches || !nav?.classList.contains('open')) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    setMenu(false, true);
  } else if (event.key === 'Tab') {
    const controls = [menuToggle, ...nav.querySelectorAll('a[href]')];
    const index = controls.indexOf(document.activeElement);
    if (event.shiftKey && index <= 0) {
      event.preventDefault();
      controls[controls.length - 1].focus();
    } else if (!event.shiftKey && (index === controls.length - 1 || index < 0)) {
      event.preventDefault();
      controls[0].focus();
    }
  }
});
setMenu(false);

/* Quick / Full Reset cards: jump to form and pre-select the choice */
document.querySelectorAll('.reset-choice-link').forEach(link => {
  link.addEventListener('click', () => {
    const choice = link.dataset.resetChoice;
    const resetSelect = document.querySelector('select[name="reset_level"]');

    if (resetSelect && choice) {
      resetSelect.value = choice;
    }
  });
});

/* Header Resettable logo always returns to the true top */
document.querySelectorAll('.back-to-top').forEach(link => {
  link.addEventListener('click', event => {
    if (link.getAttribute('href') !== '#top') return;
    event.preventDefault();
    setMenu(false);

    history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: window.matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth'
    });
  });
});

/* Subtle reveal animation */
if ('IntersectionObserver' in window) {
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
