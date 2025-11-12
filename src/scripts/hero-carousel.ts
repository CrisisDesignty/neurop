import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

window.addEventListener('load', () => {
  console.log('Hero carousel script loaded');
  const emblaNode = document.getElementById('hero-carousel');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

  console.log('Embla node:', emblaNode);
  if (!emblaNode) return;

  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });

  const embla = EmblaCarousel(emblaNode, {
    loop: true,
    duration: 30,
    watchDrag: true
  }, [autoplay]);

  console.log('Embla initialized:', embla);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      embla.scrollPrev();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      embla.scrollNext();
    });
  }
});