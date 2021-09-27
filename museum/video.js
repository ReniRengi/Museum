window.addEventListener('load', function (event) {
      
    scene();
  });
  
  const progressBar = document.getElementById("progress-bar");
  const volumeScale = document.querySelector(".volume");

  var element = document.getElementById("progress-bar");   
  var width = 1;
  var identity = setInterval(scene, 10);
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
