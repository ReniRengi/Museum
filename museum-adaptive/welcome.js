window.addEventListener("load", function (event) {
    toSlides();
  });

  function toSlides(){
const prev=document.getElementById('btn-prev');
const next=document.getElementById('btn-next');

const slides=document.querySelectorAll('.slide');
const dots=document.querySelectorAll('.dot');
const counter=document.getElementById('slider-counter');

let index=0;


const activeSlide=n=>{
   for (slide of slides){
    slide.classList.remove('active'); 
    
}
slides[n].classList.add('active');
}

const nextSlide=()=>{
    if(index==slides.length-1){
        index=0;
        prepareCurrentSlide(index);
    }
    else{
        index++;
        prepareCurrentSlide(index);
    }
    counter.innerHTML = '0' + (index + 1);
}

const prevSlide=()=>{
    if(index==0){
        index=slides.length-1;
       
        prepareCurrentSlide(index);
    }
    else{
        index--;
        prepareCurrentSlide(index);
    }
    counter.innerHTML = '0' + (index + 1);
}
const activeDot=n=>{
    for (dot of dots){
    dot.classList.remove('active');
    }
    dots[n].classList.add('active');
    }
    
const prepareCurrentSlide=ind=>{
    activeSlide(ind);
    activeDot(ind);
}

dots.forEach((item,indexDot)=>{
    item.addEventListener('click', () =>{
        index=indexDot;
        prepareCurrentSlide(index);
    })
})

let xDown = null;

function getTouches(evt) {
  return evt.touches;
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                    
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown) {
        return;
    }

    let xUp = evt.touches[0].clientX; 

    let xMove = xDown - xUp;

    if ( Math.abs( xMove ) > 2 ) {
        if ( xMove > 0 ) {
            nextSlide();
        } else {
            prevSlide();
        }                       
    }
    xDown = null;                                       
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide)

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
  }