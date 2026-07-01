const artistData = {
    "newjeans": { name: "NewJeans", debut: "2022년", bio: "ADOR 소속의 5인조 걸그룹.", tracks: ["Hype Boy", "Attention", "Ditto"] },
    "the-weeknd": { name: "The Weeknd", debut: "2010년", bio: "캐나다 출신의 세계적인 PBR&B 싱어송라이터.", tracks: ["Blinding Lights", "Starboy", "Save Your Tears"] },
    "bts": { name: "BTS", debut: "2013년", bio: "빅히트 뮤직 소속의 7인조 보이그룹.", tracks: ["Dynamite", "Butter", "Spring Day"] },
    "ed-sheeran": { name: "Ed Sheeran", debut: "2011년", bio: "영국 출신의 천재 싱어송라이터.", tracks: ["Shape of You", "Thinking Out Loud", "Perfect"] },
    "bibi": { name: "비비 (BIBI)", debut: "2019년", bio: "필굿뮤직 소속의 독보적인 색깔을 가진 솔로 가수.", tracks: ["밤양갱", "나쁜X", "인생은 나쁜X"] }
};

const keys = Object.keys(artistData);

const randomKey = keys[Math.floor(Math.random() * keys.length)];

const urlParams = new URLSearchParams(window.location.search);

const artistId = urlParams.get('id') || randomKey; 
const artist = artistData[artistId];

if (artist) {
    document.getElementById('artist-name').textContent = artist.name;
    document.getElementById('debut-text').textContent = artist.debut;
    document.getElementById('artist-bio').textContent = artist.bio;

    const trackListEl = document.getElementById('track-list');
    trackListEl.innerHTML = ''; 
    artist.tracks.forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        trackListEl.appendChild(li);
    });

    document.getElementById('review-link').href = `review.html?id=${artistId}`;
} else {
    document.getElementById('artist-profile').innerHTML = '<h1>아티스트 정보를 찾을 수 없습니다.</h1>';
}