import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  player.setCurrentTime(
    JSON.parse(localStorage.getItem('videoplayer-current-time')).playerPauseTime
  );
  // data is an object containing properties specific to that event
};
const onPause = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify({ playerPauseTime: data.seconds })
  );
  // data is an object containing properties specific to that event
};
player.on('playing', onPlay);
player.on('timeupdate', throttle(onPause, 1000));
player.on('pause', onPause);
player.on('seeking', onPause);
