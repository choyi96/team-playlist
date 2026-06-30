document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.genre-card');
 
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');

        if (!isOpen) {
          card.classList.add('open');
        }
      });
    });
});