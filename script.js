const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const resetForm = document.querySelector('#reset-form');
const formStatus = document.querySelector('.form-status');

resetForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (formStatus) {
    formStatus.textContent =
      'Thanks — the form is working. We’ll connect it to Resettable’s email before launch.';
  }
});

const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}