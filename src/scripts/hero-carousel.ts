import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  // Wait a bit for images to load
  setTimeout(() => {
    const swiperContainer = document.querySelector('.hero-swiper');

    if (!swiperContainer) {
      return;
    }

    const swiper = new Swiper('.hero-swiper', {
      modules: [Navigation, Autoplay],
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.hero-next',
        prevEl: '.hero-prev',
      },
      speed: 600,
      grabCursor: true,
    });
  }, 500);
});