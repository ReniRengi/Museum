const videoPlayer = document.querySelector('#video-player');
const progressBar = document.getElementById('progress-bar');
const currTime = document.getElementById('curr-time');
const durationTime = document.getElementById('duration');

const bigPlayButton = document.getElementById('big_button');
const actionButton = document.getElementById('action');
const muteButton = document.getElementById('mute');
const volumeScale = document.getElementById('volume');
const speedSelect = document.getElementById('speed');
const fullscreenButton = document.getElementById('fullscreen');

function videoControl() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    actionButton.setAttribute('class', 'action_play');
    bigPlayButton.setAttribute('class', 'big_button_off');
  } else {
    videoPlayer.pause();
    actionButton.setAttribute('class', 'action_pause');
    bigPlayButton.setAttribute('class', 'big_button_on');
  }
  if (durationTime.innerHTML == '00:00') {
    durationTime.innerHTML = videoTime(videoPlayer.duration);
  }
}

function videoTime(time) {
  const minutes = Math.floor(+time / 60);
  const seconds = Math.floor(+time - minutes * 60);
  const minutesVal = minutes < 10 ? `0${minutes}` : minutes;
  const secondsVal = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutesVal}:${secondsVal}`;
}

function videoProgress() {
  const progress = videoPlayer.currentTime / videoPlayer.duration;
  progressBar.value = progress * 100;
  currTime.innerHTML = videoTime(videoPlayer.currentTime);
}

function videoChangeTime(e) {
  var bounds = e.target.getBoundingClientRect();
  let mouseX = e.clientX - bounds.left;

  let progress = mouseX / progressBar.offsetWidth;
  videoPlayer.currentTime = videoPlayer.duration * progress;
}

function videoScroll(forward = false) {
  videoPlayer.currentTime = forward ? videoPlayer.currentTime + 10 : videoPlayer.currentTime - 10;
}

function videoChooseTime(e) {
  let volumeNumber = event.key * 10;
  console.log(volumeNumber);
  videoPlayer.currentTime = (volumeNumber * videoPlayer.duration) / 100;
}

function videoChangeVolume() {
  videoPlayer.volume = volumeScale.value / 100;
  if (videoPlayer.volume == 0) {
    muteButton.setAttribute('class', 'mute_true');
  } else {
    muteButton.setAttribute('class', 'mute_false');
  }
}

function videoMute() {
  if (videoPlayer.volume === 0) {
    videoPlayer.volume = volumeScale.value / 100;
    muteButton.setAttribute('class', 'mute_false');
  } else {
    videoPlayer.volume = 0;
    muteButton.setAttribute('class', 'mute_true');
  }
}

function videoChangeSpeed() {
  videoPlayer.playbackRate = speedSelect.value / 100;
}

function increaseVideoSpeed() {
  if (speedSelect.value === '200') {
    return;
  }
  let nb = Number(speedSelect.value);
  speedSelect.value = nb + 25;
  videoChangeSpeed();
}

function decreaseVideoSpeed() {
  if (speedSelect.value === '25') {
    return;
  }
  let nb = Number(speedSelect.value);
  speedSelect.value = nb - 25;
  videoChangeSpeed();
}

function nextFrame() {
  videoPlayer.currentTime += 1 / 29.97;
}

volumeScale.value = 50;
videoChangeVolume();
fullscreenButton.addEventListener('click', toggleFullscreen());

function toggleFullscreen() {
  const setFullscreen = (state) => videoPlayer.setAttribute('data-fullscreen', state);
  const isFullScreen = !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
  const getExitFullScreenPromise = () => {
    if (document.exitFullscreen) return document.exitFullscreen();
    else if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
    else if (document.webkitCancelFullScreen) return document.webkitCancelFullScreen();
    else if (document.msExitFullscreen) return document.msExitFullscreen();
  };
  const getRequestFullScreenPromise = () => {
    if (videoPlayer.requestFullscreen) return videoPlayer.requestFullscreen();
    else if (videoPlayer.mozRequestFullScreen) return videoPlayer.mozRequestFullScreen();
    else if (videoPlayer.webkitRequestFullScreen) return videoPlayer.webkitRequestFullScreen();
    else if (videoPlayer.msRequestFullscreen) return videoPlayer.msRequestFullscreen();
  };

  const actionPromise = isFullScreen ? getExitFullScreenPromise() : getRequestFullScreenPromise();

  actionPromise.then(() => setFullscreen(!isFullScreen));
}

function handleKeyboardEvents(event) {
  const {key, shiftKey} = event;

  switch(key) {
    case ' ':
    case 'k':
    case 'л':
      videoControl();
      break;
    case 'm':
    case 'ь':
      videoMute();
      break;
    case 'f':
    case 'а':
      toggleFullscreen();
      break;
    case '.':
    case 'ю':
      nextFrame();
      break;
    case '>':
    case 'Ю':
      if (shiftKey) {increaseVideoSpeed()};
      break;
    case '<':
    case 'Б':
      if (shiftKey) {decreaseVideoSpeed()};
      break;
    case 'l':
    case 'д':
      videoScroll(true);
      break;
    case 'j':
    case 'о':
      videoScroll(false);
      break;
    default:
      if (key >= 0 && key < 10) {
        videoChooseTime();
      }
  }
}

actionButton.addEventListener('click', videoControl);
videoPlayer.addEventListener('click', videoControl);
videoPlayer.addEventListener('timeupdate', videoProgress);
progressBar.addEventListener('click', videoChangeTime);
muteButton.addEventListener('click', videoMute);
volumeScale.addEventListener('change', videoChangeVolume);
speedSelect.addEventListener('change', videoChangeSpeed);

document.addEventListener('keydown', handleKeyboardEvents);

function loadSwiper() {
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 42,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

export function initVideo() {
  window.addEventListener('load', function (event) {
    loadSwiper();
    videoControl();
  });
}
