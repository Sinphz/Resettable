const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

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
    event.preventDefault();

    nav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');

    history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
});

/* Stop browsers restoring an old section after a refresh */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('pageshow', () => {
  const navEntry = performance.getEntriesByType?.('navigation')?.[0];
  const legacyReload = performance.navigation && performance.navigation.type === 1;
  const isReload = navEntry?.type === 'reload' || legacyReload;

  if (isReload) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }
});

/* Subtle reveal animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
