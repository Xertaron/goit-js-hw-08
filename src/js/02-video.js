import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const video = new Player(iframe, {
  quality: '1080p',
  fullscreen: true,
  loop: true,
});

const time = 'videoplayer-current-time';

const currentLength = function (length) {
  const seconds = length.seconds;
  localStorage.setItem(time, JSON.stringify(seconds));
};

video.on('timeupdate', throttle(currentLength, 1000));

video.setCurrentTime(JSON.parse(localStorage.getItem(time)) || 0);
