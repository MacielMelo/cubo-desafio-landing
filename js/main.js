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

// Mostrar mensagem de sucesso se voltou do FormSubmit
if (new URLSearchParams(window.location.search).has('enviado')) {
    const form = document.getElementById('leadForm');
    form.innerHTML = '<p class="cta__success"><span class="material-icons-outlined">check_circle</span> Cadastro enviado com sucesso! Entraremos em contato pelo WhatsApp.</p>';
    form.closest('.cta__card').scrollIntoView({ behavior: 'smooth', block: 'center' });
}