 
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        }
    });
});

document.querySelectorAll('.caja, .decoracion-img').forEach(el => {
    observador.observe(el);
});


window.addEventListener('scroll', () => {
    const desplazamientoY = window.scrollY;
    document.querySelectorAll('.decoracion-img').forEach((img, i) => {
        img.style.transform = `translateY(${desplazamientoY * 0.05 * (i + 1)}px)`;
    });

    
    const boton = document.getElementById('btn-arriba');
    boton.style.display = desplazamientoY > 300 ? 'block' : 'none';
});


function irArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


const encabezado = document.querySelector('.encabezado');
encabezado.addEventListener('mouseenter', () => {
    encabezado.style.backgroundColor = '#14588c';
});
encabezado.addEventListener('mouseleave', () => {
    encabezado.style.backgroundColor = '#0b3b5b';
});
