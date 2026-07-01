import {playlist} from "./lyrics_data.js";
console.log(playlist)

const songs = document.querySelectorAll('.song');
const lyric = document.querySelector('#lyric');
const musicPlay = document.querySelector('#musicPlay');

songs.forEach((song, i) => {
    song.addEventListener('click', () => {
        const title = playlist[i].title;
        const artist = playlist[i].artist;
        const youtube = playlist[i].youtube;
        const lyricText = playlist[i].lyricText;
        
        musicPlay.src = youtube;
        lyric.innerHTML = `<h2 class="ly">${title}</h2><h5 class="ly">${artist}</h5><p class="ly">${lyricText}</p>`;
    });
});