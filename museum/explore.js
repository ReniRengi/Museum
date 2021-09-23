function main() {
    let overlay=document.getElementsByClassName("img-comp-overlay");
    let img;
    let slider;
    let clicked=0;
    let width;
    let height;
    let x;

    for ( let i = 0; i < overlay.length; i++) {
        compareImages(overlay[i]);
    }

    function compareImages(img) {
        let slider;
        width = img.offsetWidth;
        height = img.offsetHeight;
        img.style.width = (width / 2) + "px";
    
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    
    img.parentElement.insertBefore(slider, img);
    
    slider.style.top = (height / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (width / 2) - (slider.offsetWidth / 2) + "px";
    
    slider.addEventListener("mousedown", slideReady);
    
    window.addEventListener("mouseup", slideFinish);
    
    slider.addEventListener("touchstart", slideReady);
     
    window.addEventListener("touchstop", slideFinish); 
    }

    function slideReady(e) {
        
        e.preventDefault();
        
        clicked = 1;
        
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }

      function slideFinish() {
        
        clicked = 0;
      }

      function slideMove(e) {
        let pos;
        if (clicked == 0) return false;
        pos = getCursorPos(e)
        
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
       
        slide(pos);
      }

      function getCursorPos(e) {
        let a; 
        x = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        x = x - window.pageXOffset;
        return x;
      }

      function slide(x) {
       img.style.width = x + "px";
                slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }


window.addEventListener('load', function (event) {
        main();
});
    