import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const myFrame = document.querySelector('#vimeo-player');
const myPlayer = new Player(myFrame);
const STORAGE_KEY_TIME = "videoplayer-current-time";

const initialTime = localStorage.getItem(STORAGE_KEY_TIME) || '0'
myPlayer.setCurrentTime(initialTime);

myPlayer.on('timeupdate', throttle(onTimeUpdate, 1000));


function onTimeUpdate(e) {
    localStorage.setItem(STORAGE_KEY_TIME, e.seconds)
    return
}