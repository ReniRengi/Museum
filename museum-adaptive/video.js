

window.addEventListener('load', function (event) {
    loadSwiper();
  });

function loadSwiper(){
    const swiper = new Swiper (".swiper", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 42,

        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
    
}

