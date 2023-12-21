document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slider__item');
    const totalSlides = slides.length;

    // Функція для оновлення позиції слайдів
    function updateSlidePosition() {
        const offset = -currentIndex * 100;
        document.querySelector('.slider__wrapper').style.transform = `translateX(${offset}%)`;
    }

    // Обробник для кнопки "Наступний"
    document.querySelector('.slider__button--next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    });

    // Обробник для кнопки "Попередній"
    document.querySelector('.slider__button--prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    // Ініціалізація слайдера
    updateSlidePosition();
});
