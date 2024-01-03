document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-btn');

    burger.addEventListener('click', () => {
        nav.classList.add('nav-active');
    });

    closeBtn.addEventListener('click', () => {
        nav.classList.remove('nav-active');
    });
});
