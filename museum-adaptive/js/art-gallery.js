const galleryContainer = document.querySelector('.picture-inner-container');

const imagesData = [
  { src: './assets/img/gallery/galery1.jpg', className: 'square' },
  { src: './assets/img/gallery/galery2.jpg', className: 'portrait' },
  { src: './assets/img/gallery/galery3.jpg', className: 'portrait' },
  { src: './assets/img/gallery/galery4.jpg', className: 'square' },
  { src: './assets/img/gallery/galery5.jpg', className: 'portrait' },
  { src: './assets/img/gallery/galery6.jpg', className: 'portrait' },
  { src: './assets/img/gallery/galery7.jpg', className: 'portrait' },
  { src: './assets/img/gallery/galery8.jpg', className: 'portrait' },
  { src: './assets/img/gallery/galery9.jpg', className: 'portrait' },
  { src: './assets/img/gallery/galery10.jpg', className: 'square' },
  { src: './assets/img/gallery/galery11.jpg', className: 'square' },
  { src: './assets/img/gallery/galery12.jpg', className: 'landscape' },
  { src: './assets/img/gallery/galery13.jpg', className: 'landscape' },
  { src: './assets/img/gallery/galery14.jpg', className: 'portrait' },
  { src: './assets/img/gallery/galery15.jpg', className: 'square' }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadImages() {
  let pictureArray = imagesData.map((imageData, index) => {
    const img = document.createElement('img');

    img.src = imageData.src;
    img.classList.add(imageData.className);
    img.alt = `gallery${index}`;

    return img;
  });

  shuffleArray(pictureArray);

  pictureArray.forEach((imgElement) => galleryContainer.append(imgElement));
}

export function initGallery() {
  window.addEventListener('load', loadImages);
}