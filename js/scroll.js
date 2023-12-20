// Додаємо інтерактивність для вкладок
document.querySelectorAll('.tab__button').forEach(button => {
    button.addEventListener('click', function() {
      const tab = this.closest('.tab');
      const content = tab.querySelector('.tab__content');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
  