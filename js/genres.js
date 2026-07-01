window.onload = function() {
  const cards = document.querySelectorAll('.genre-card');

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function() {
      if (this.classList.contains('open') == false) {
        this.classList.add('open');
      }else {
        this.classList.remove('open');
      }
    });
  }
};