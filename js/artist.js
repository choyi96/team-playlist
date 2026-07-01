const artistData = {
    bts: {
        name: "방탄소년단 (BTS)",
        debut: "2013년 6월 13일",
        bio: "대한민국의 7인조 보이그룹으로, 전 세계적으로 엄청난 영향력을 가진 글로벌 팝 아이콘입니다.",
        tracks: ["Dynamite", "Butter", "봄날", "Life Goes On"]
    },
    iu: {
        name: "아이유 (IU)",
        debut: "2008년 9월 18일",
        bio: "대한민국의 싱어송라이터이자 배우로, 독보적인 음원 파워와 깊은 감성을 가진 아티스트입니다.",
        tracks: ["좋은 날", "밤편지", "에잇 (prod. & feat. SUGA)", "Love wins all"]
    }
};

function displayArtistProfile(artistKey) {
    const artist = artistData[artistKey];
    
    
    if (!artist) {
        console.error("해당 아티스트의 정보가 없습니다.");
        return;
    }

   
    const nameElem = document.getElementById("artist-name");
    const debutElem = document.getElementById("debut-text");
    const bioElem = document.getElementById("artist-bio");
    const trackListElem = document.getElementById("track-list");

   
    nameElem.textContent = artist.name;
    debutElem.textContent = artist.debut;
    bioElem.textContent = artist.bio;

 
    trackListElem.innerHTML = ""; 

   
    artist.tracks.forEach(track => {
        const li = document.createElement("li");
        li.textContent = track;
        trackListElem.appendChild(li);
    });
}


document.body.addEventListener("click", function(event) {
    
    if (event.target.classList.contains("btn-artist")) {
        const selectedArtist = event.target.getAttribute("data-artist");
        displayArtistProfile(selectedArtist);
    }
});