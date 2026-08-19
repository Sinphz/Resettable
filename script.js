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

const modal = document.querySelector('#project-modal');
const title = document.querySelector('#modal-title');
const copy = document.querySelector('#modal-copy');

document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    title.textContent = project.dataset.title;
    copy.textContent = project.dataset.copy;
    modal.showModal();
  });
});

document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => {
  if (e.target === modal) modal.close();
});

document.querySelector('#year').textContent = new Date().getFullYear();


const resetForm = document.querySelector('#reset-form');
const formStatus = document.querySelector('.form-status');

resetForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formStatus) {
    formStatus.textContent = 'Form layout is ready. We’ll connect it to Resettable’s email before launch.';
  }
});
