window.addEventListener('load', function (event) {
      
    loadImage();
  });
  const pictureInnerContainer = document.querySelector('.picture-inner-container');
function loadImage(){
let pictureArray=[];
const img1 = document.createElement('img');
img1.classList.add('gallery-img')
img1.src = './assets/img/gallery/galery1.jpg';
img1.alt = 'galery1';
img1.height='456';
img1.width=`456`;
pictureArray.push(img1);

const img2 = document.createElement('img');
img2.classList.add('gallery-img')
img2.src = './assets/img/gallery/galery2.jpg';
img2.alt = 'galery2';
img2.height='570';
img2.width=`456`;
pictureArray.push(img2);

const img3 = document.createElement('img');
img3.classList.add('gallery-img')
img3.src = './assets/img/gallery/galery3.jpg';
img3.alt = 'galery3';
img3.height='570';
img3.width=`456`;
pictureArray.push(img3);

const img4 = document.createElement('img');
img4.classList.add('gallery-img')
img4.src = './assets/img/gallery/galery4.jpg';
img4.alt = 'galery4';
img4.height='456';
img4.width=`456`;
pictureArray.push(img4);

const img5 = document.createElement('img');
img5.classList.add('gallery-img')
img5.src = './assets/img/gallery/galery5.jpg';
img5.alt = 'galery5';
img5.height='570';
img5.width=`456`;
pictureArray.push(img5);

const img6 = document.createElement('img');
img6.classList.add('gallery-img')
img6.src = './assets/img/gallery/galery6.jpg';
img6.alt = 'galery6';
img6.height='570';
img6.width=`456`;
pictureArray.push(img6);

const img7 = document.createElement('img');
img7.classList.add('gallery-img')
img7.src = './assets/img/gallery/galery7.jpg';
img7.alt = 'galery7';
img7.height='570';
img7.width=`456`;
pictureArray.push(img7);

const img8 = document.createElement('img');
img8.classList.add('gallery-img')
img8.src = './assets/img/gallery/galery8.jpg';
img8.alt = 'galery8';
img8.height='570';
img8.width=`456`;
pictureArray.push(img8);

const img9 = document.createElement('img');
img9.classList.add('gallery-img')
img9.src = './assets/img/gallery/galery9.jpg';
img9.alt = 'galery9';
img9.height='570';
img9.width=`456`;
pictureArray.push(img9);

const img10 = document.createElement('img');
img10.classList.add('gallery-img')
img10.src = './assets/img/gallery/galery10.jpg';
img10.alt = 'galery10';
img10.height='456';
img10.width=`456`;
pictureArray.push(img10);

const img11 = document.createElement('img');
img11.classList.add('gallery-img')
img11.src = './assets/img/gallery/galery11.jpg';
img11.alt = 'galery11';
img11.height='456';
img11.width=`456`;
pictureArray.push(img11);

const img12 = document.createElement('img');
img12.classList.add('gallery-img')
img12.src = './assets/img/gallery/galery12.jpg';
img12.alt = 'galery12';
img12.height='342';
img7.width=`456`;
pictureArray.push(img12);

const img13 = document.createElement('img');
img13.classList.add('gallery-img')
img13.src = './assets/img/gallery/galery13.jpg';
img13.alt = 'galery13';
img13.height='342';
img7.width=`456`;
pictureArray.push(img13);

const img14 = document.createElement('img');
img14.classList.add('gallery-img')
img14.src = './assets/img/gallery/galery14.jpg';
img14alt = 'galery14';
img14.height='570';
img14.width=`456`;
pictureArray.push(img14); 

const img15 = document.createElement('img');
img15.classList.add('gallery-img')
img15.src = './assets/img/gallery/galery15.jpg';
img15.alt = 'galery15';
img15.height='456';
img15.width=`456`;
pictureArray.push(img15);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(pictureArray);

pictureArray= pictureArray.map(function(elem){
  return pictureInnerContainer.append(elem);
});

}



