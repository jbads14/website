
function desplazar(event) {
    event.preventDefault(); // Prevenir comportamiento predeterminado del enlace
    const id = event.target.getAttribute('href'); // Obtener el atributo href del enlace
    const seccion = document.querySelector(id); // Obtener la sección correspondiente a la ID
    seccion.scrollIntoView({ behavior: 'smooth' }); // Desplazarse a la sección con un efecto suave
}

// Agregar evento de clic a todos los enlaces de navegación
const enlaces = document.querySelectorAll('nav a');
enlaces.forEach((enlace) => {
    enlace.addEventListener('click', desplazar);
});
