document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.video-seccion');
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remover la clase 'activo' de todos los enlaces
            links.forEach(item => item.classList.remove('activo'));
            // Agregar la clase 'activo' al enlace seleccionado
            this.classList.add('activo');

            // Mostrar la sección correspondiente
            const videoId = this.getAttribute('data-video');
            sections.forEach(section => {
                if (section.id === videoId) {
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                }
            });

            // Ocultar el menú de navegación después de seleccionar un enlace
            navUl.classList.remove('visible');
        });
    });

    // Alternar la visibilidad del menú de navegación
    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('visible');
    });

    // Actualizar el año en el pie de página
    document.getElementById('year').textContent = new Date().getFullYear();
});
