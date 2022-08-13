/*import Player from "@vimeo/player";
import { throttle } from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);


const throttle = e => {
    localStorage.setItem('videoplayer-current-time', e.seconds)};

player.on('timeupdate', throttle);*/

import Player from "@vimeo/player";
import throttle from 'lodash.throttle'


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    

function findCurrentTime (data) 
        {localStorage.setItem('videoplayer-current-time', data.seconds);}

        player.on('timeupdate', throttle(findCurrentTime, 1000));



const getCurrentTime = localStorage.getItem('videoplayer-current-time');


player.setCurrentTime(getCurrentTime)
    .then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
   