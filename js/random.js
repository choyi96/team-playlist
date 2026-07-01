const musicList = [
    { id: 1, title: "Hype Boy", artist: "NewJeans", genre: "K-Pop", artistId: "newjeans" },
    { id: 2, title: "Blinding Lights", artist: "The Weeknd", genre: "Synthwave", artistId: "the-weeknd" },
    { id: 3, title: "Dynamite", artist: "BTS", genre: "K-Pop", artistId: "bts" },
    { id: 4, title: "Shape of You", artist: "Ed Sheeran", genre: "Pop", artistId: "ed-sheeran" },
    { id: 5, title: "밤양갱", artist: "비비 (BIBI)", genre: "R&B/Soul", artistId: "bibi" }
];

document.getElementById('recommend-btn').addEventListener('click', () => {
   

    const randomIndex = Math.floor(Math.random() * musicList.length);
    const selectedMusic = musicList[randomIndex];

    document.getElementById('music-title').textContent = selectedMusic.title;
    document.getElementById('music-artist').textContent = selectedMusic.artist;
    document.getElementById('genre-text').textContent = selectedMusic.genre;
    
    
    document.getElementById('artist-link').href = `artist.html?id=${selectedMusic.artistId}`;

   
    document.getElementById('music-card').style.display = 'block';
});