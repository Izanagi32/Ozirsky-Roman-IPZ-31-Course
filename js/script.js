document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelector('.modal');
    var modalBackdrop = document.getElementById('modalBackdrop');
    var openModalButton = document.getElementById('openModalButton');
    var closeModalButton = document.querySelector('[data-modal-close]');
  
    // Функція для відкриття модального вікна
      openModalButton.addEventListener('click', function() {
          event.preventDefault();
          modal.style.display = 'block';
          modalBackdrop.style.display = 'block';
      });
  
    // Функція для закриття модального вікна
      closeModalButton.addEventListener('click', function() {
          modal.style.display = 'none';
          modalBackdrop.style.display = 'none';
      });
  
    // Додаємо слухач подій на кнопку для відкриття модального вікна
    openModalButton.addEventListener('click', openModal);
  
    // Додаємо слухач подій на елемент для закриття модального вікна
    closeModalButton.addEventListener('click', closeModal);
  });