window.addEventListener("load", function (event) {
    ///loadForm();
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
    console.log (n);
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

 getEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event;
 swipeStart = function() {
    let evt = getEvent();

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide)
  }
