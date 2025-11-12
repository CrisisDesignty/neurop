document.addEventListener('DOMContentLoaded', () => {
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const faqItem = trigger.closest('.faq-item');
      const content = faqItem?.querySelector('.faq-content');
      const icon = trigger.querySelector('.faq-icon') as HTMLElement;

      if (!content || !icon) return;

      // Toggle current item
      const isOpen = !content.classList.contains('hidden');

      if (isOpen) {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
});