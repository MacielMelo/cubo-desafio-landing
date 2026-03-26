// Top bar scroll shadow
const topBar = document.getElementById('topBar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 8) {
        topBar.classList.add('top-bar--scrolled');
    } else {
        topBar.classList.remove('top-bar--scrolled');
    }
}, { passive: true });

// Smooth reveal on scroll (Intersection Observer)
const revealElements = document.querySelectorAll('.card, .cta__card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s cubic-bezier(.2,0,0,1), transform .5s cubic-bezier(.2,0,0,1)';
    revealObserver.observe(el);
});

// Lead form → mailto
const EMAIL_DESTINO = 'maciel.dev@gamil.com';

document.getElementById('leadForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('leadNome').value.trim();
    const whatsapp = document.getElementById('leadWhatsapp').value.trim();

    if (!nome || !whatsapp) return;

    const assunto = encodeURIComponent('Novo Lead — Playtest Puzzle Board 3D');
    const corpo = encodeURIComponent(
        `Novo interesse no Playtest!\n\nNome: ${nome}\nWhatsApp: ${whatsapp}`
    );

    window.location.href = `mailto:${EMAIL_DESTINO}?subject=${assunto}&body=${corpo}`;
});