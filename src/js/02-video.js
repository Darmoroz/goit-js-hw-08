import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// const onPlay = function (data) {
//   if (localStorage.getItem(STORAGE_KEY)) {
//     player.setCurrentTime(
//       JSON.parse(localStorage.getItem(STORAGE_KEY)).playerPauseTime
//     );
//   }
// };
const onSetCurrentTimePlay = function (data) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ playerPauseTime: data.seconds })
  );
  // data is an object containing properties specific to that event
};
// player.on('playing', onPlay);
player.on('timeupdate', throttle(onSetCurrentTimePlay, 1000));
// player.on('pause', onSetCurrentTimePlay);
// player.on('seeking', onSetCurrentTimePlay);
if (localStorage.getItem(STORAGE_KEY)) {
    player.setCurrentTime(
      JSON.parse(localStorage.getItem(STORAGE_KEY)).playerPauseTime
    );