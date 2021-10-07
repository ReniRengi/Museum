function initComparisons() {
  let x = document.getElementsByClassName('img-comp-overlay');
  let i;

  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }

  function compareImages(img) {
    let clicked = 0;
    const w = img.offsetWidth;

    const slideFinish = () => (clicked = 0);
    const slideReady = (e) => {
      e.preventDefault();
      clicked = 1;
      window.addEventListener('mousemove', slideMove);
      window.addEventListener('touchmove', slideMove);
    };
    const slideMove = (e) => {
      if (clicked == 0) return false;

      const pos = getCursorPos(e);

      if (pos < 0) pos = 0;
      if (pos > w) pos = w;

      slide(pos);
    };
    const getCursorPos = (e = window.event) => e.pageX - img.getBoundingClientRect().left - window.pageXOffset;
    const slide = (x) => {
      img.style.width = `${x}px`;
      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + 'px';
    };
    const createSliderHandle = () => {
      const sliderHandle = document.createElement('div');
      sliderHandle.setAttribute('class', 'slider-handle');
      sliderHandle.style.height = '16px';
      sliderHandle.style.width = '16px';
      return sliderHandle;
    };
    const createSlider = () => {
      const slider = document.createElement('div');
      slider.appendChild(createSliderHandle());
      slider.setAttribute('class', 'img-comp-slider');
      slider.style.left = w / 2 - slider.offsetWidth / 2 + 'px';
      slider.addEventListener('mousedown', slideReady);
      window.addEventListener('mouseup', slideFinish);
      slider.addEventListener('touchstart', slideReady);
      window.addEventListener('touchstop', slideFinish);
      return slider;
    };

    const slider = createSlider();

    img.parentElement.insertBefore(slider, img);
    img.style.width = w / 2 + 'px';
  }
}

export function initExplore() {
  window.addEventListener('load', () => initComparisons());
}