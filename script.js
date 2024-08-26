document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.video-seccion');
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            links.forEach(item => item.classList.remove('activo'));
            this.classList.add('activo');

            const videoId = this.getAttribute('data-video');
            sections.forEach(section => {
                if (section.id === videoId) {
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                }
            });

            navUl.classList.remove('visible');
        });
    });

    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('visible');
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});
