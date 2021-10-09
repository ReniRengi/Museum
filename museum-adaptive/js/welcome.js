
export function initWelcome() {
  window.addEventListener('load', () => initSlider());
}

function initSlider() {
  const prev = document.getElementById('btn-prev');
  const next = document.getElementById('btn-next');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const counter = document.getElementById('slider-counter');

  let slideIndex = 0;
  let touchDownPos = null;

  const updateCounter = (currentIndex) => counter.innerHTML = `0${currentIndex + 1}`;

  const setActiveClass = (elements, activeIndex) => {
    elements.forEach((dot) => dot.classList.remove('active'));
    elements[activeIndex].classList.add('active');
  };

  const setActiveSlide = (index) => {
    slideIndex = index;
    setActiveClass(slides, slideIndex);
    setActiveClass(dots, slideIndex);
    updateCounter(slideIndex);
  }

  const nextSlide = () => slideIndex === slides.length - 1 ? setActiveSlide(0) : setActiveSlide(slideIndex + 1);
  const prevSlide = () => slideIndex === 0 ? setActiveSlide(slides.length - 1) : setActiveSlide(slideIndex - 1);

  const handleTouchStart = (touchEvent) => touchDownPos = touchEvent.touches[0].clientX;

  const handleTouchMove = (moveEvent) => {
    if (touchDownPos) {
      let moveLength = touchDownPos - moveEvent.touches[0].clientX;

      if (Math.abs(moveLength) > 2) {
        if (moveLength > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }

      touchDownPos = null;
    }
  }

  dots.forEach((item, dotIndex) => item.addEventListener('click', () => setActiveSlide(dotIndex)));
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
}
