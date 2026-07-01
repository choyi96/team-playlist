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
    },
    blackpink: {
        name: "블랙핑크 (BLACKPINK)",
        debut: "2016년 8월 8일",
        bio: "대한민국의 4인조 걸그룹으로, 강렬한 음악과 스타일리시한 매력으로 전 세계 음악 시장과 패션계를 사로잡은 글로벌 탑 아티스트입니다.",
        tracks: ["DDU-DU DDU-DU", "Kill This Love", "How You Like That", "Pink Venom"]
    },
    newjeans: {
        name: "뉴진스 (NewJeans)",
        debut: "2022년 7월 22일",
        bio: "대한민국의 5인조 걸그룹으로, 독창적인 콘셉트와 신선한 Y2K 감성의 음악을 선보이며 데뷔와 동시에 글로벌 신드롬을 일으킨 팀입니다.",
        tracks: ["Hype Boy", "Attention", "Ditto", "OMG"]
    },
    seventeen: {
        name: "세븐틴 (SEVENTEEN)",
        debut: "2015년 5월 26일",
        bio: "대한민국의 13인조 보이그룹으로, 작사·작곡·안무 제작을 직접 해내는 '자체 제작 아티스트'이자 압도적인 퍼포먼스를 자랑하는 글로벌 대세입니다.",
        tracks: ["아주 NICE", "손오공", "울고 싶지 않아", "God of Music"]
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