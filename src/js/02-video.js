import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const video = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const time = 'videoplayer-current-time';

const currentLength = function (length) {
  const seconds = length.seconds;
  localStorage.setItem(time, JSON.stringify(seconds));
};

video.on('timeupdate', throttle(currentLength, 1000));

video.setCurrentTime(JSON.parse(localStorage.getItem(time)) || 0);

video
  .setColor('#d8e0ff')
  .then(function (color) {
    console.log('Color has been set');
  })
  .catch(function (error) {
    console.log('Could not set the color');
  });
