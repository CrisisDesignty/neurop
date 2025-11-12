document.addEventListener('DOMContentLoaded', () => {
  const moreButtons = document.querySelectorAll('.service-more-btn');

  moreButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('La página de servicios detallados estará disponible próximamente.');
    });
  });
});