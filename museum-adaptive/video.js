

window.addEventListener('load', function (event) {
    loadSwiper();
  });

function loadSwiper(){
    const swiper = new Swiper (".swiper", {
        direction: 'horizontal',
        loop: true,

        pagination: '.swiper-pagination',

        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        autoplay: 3000
    });
    
}

