// Usamos IntersectionObserver para animar secciones cuando entran en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section').forEach(s => observer.observe(s));

// Agregar comportamiento simple al nav (marcar link activo)
const navLinks = document.querySelectorAll('header nav a');
window.addEventListener('hashchange', () => {
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === location.hash));
});

// Opcional: marcar el primer link si no hay hash
if (!location.hash) navLinks[0].classList.add('active');