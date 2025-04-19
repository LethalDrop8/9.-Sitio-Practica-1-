// Fade in al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.box, .decoracion-img').forEach(el => {
    observer.observe(el);
});

// Efecto flotante en decoraciones
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('.decoracion-img').forEach((img, i) => {
        img.style.transform = `translateY(${scrollY * 0.05 * (i + 1)}px)`;
    });
});

// Header hover
const header = document.querySelector('.header');
header.addEventListener('mouseenter', () => {
    header.style.backgroundColor = '#14588c';
});

header.addEventListener('mouseleave', () => {
    header.style.backgroundColor = '#0b3b5b';
});
