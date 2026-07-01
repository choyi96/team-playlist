const likeButton = document.querySelectorAll('.like');

likeButton.forEach(button => {
    button.addEventListener('click', function(e){
        e.stopPropagation();
        const likeCount = button.querySelector('.likeButton');
        const count = Number(likeCount.textContent);
        likeCount.textContent = count + 1;
    });
});

const maker = document.querySelectorAll('.maker');
const sharePlaylist = document.querySelector("#sharePlaylist");

const playlist = [
    { tracks: [{title:"검정치마",artist:"Ling Ling"},{title:"wave to earth",artist:"ride"},{title:"신인류",artist:"작가미정"},{title:"카더가든",artist:"그대 작은 나의 세상이 되어"},{title:"n@di",artist:"편지"}] },
    { tracks: [{title:"에픽하이",artist:"Love Love Love"},{title:"에픽하이",artist:"우산"},{title:"리쌍",artist:"광대"},{title:"프라이머리",artist:"자니"},{title:"개리",artist:"바람이나 좀 쐐"},{title:"빅뱅",artist:"LAST DANCE"},{title:"리쌍",artist:"눈물"},{title:"다이나믹 듀오",artist:"죽일놈"}] },
    { tracks: [{title:"태연",artist:"Rain"},{title:"레드벨벳",artist:"러시안 룰렛"},{title:"트와이스",artist:"Cheer Up"},{title:"볼빨간사춘기",artist:"우주를 줄게"},{title:"강승윤",artist:"본능적으로"},{title:"위너",artist:"REALLY REALLY"},{title:"레드벨벳",artist:"IN AND OUT"},{title:"현아",artist:"BUBBLE POP!"},{title:"미스에이",artist:"남자 없이 잘 살아"}] }
];


function showPlayList(index){
    const pl = playlist[index];

    if(!pl) return;
    
    sharePlaylist.innerHTML = '';

    let rows = '';

    pl.tracks.forEach(track => {
        rows += `<tr>
        <td>${track.title}</td>
        <td>${track.artist}</td>
        </tr>`;
    });
    sharePlaylist.innerHTML = rows;
}

maker.forEach((card, index) =>{
    card.addEventListener('click', () => {
        showPlayList(index);
    });
});