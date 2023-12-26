
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.nav-second__hamburger');
    const hamburgerMenu = document.querySelector('.nav-second__hamburger-menu');

    hamburgerButton.addEventListener('click', () => {
        // Перемикає клас 'active', який контролює відображення меню
        hamburgerMenu.classList.toggle('active');
    });
});
