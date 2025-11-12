document.addEventListener('DOMContentLoaded', () => {
  const moreButtons = document.querySelectorAll('.service-more-btn');

  moreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const filter = target.getAttribute('data-service-filter');

      if (filter === 'all') {
        // Special case: Formación y asesoría especializada goes to WhatsApp
        window.open('https://wa.me/526623184618?text=Hola,%20me%20gustaría%20más%20información%20sobre%20los%20servicios%20de%20formación%20y%20asesoría%20especializada.', '_blank');
      } else if (filter) {
        // Navigate to especialistas page with filter parameter
        window.location.href = `/especialistas?filter=${filter}`;
      } else {
        // Fallback for buttons without filter
        window.location.href = '/especialistas';
      }
    });
  });
});