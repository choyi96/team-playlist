const urlParams = new URLSearchParams(window.location.search);
const artistId = urlParams.get('id') || 'unknown';

document.getElementById('back-to-artist').href = `artist.html?id=${artistId}`;
document.getElementById('review-title').textContent = `${artistId.toUpperCase()} 리뷰 게시판`;

const reviews = [];

const reviewForm = document.getElementById('review-form');
const reviewContainer = document.getElementById('review-container');
const noReviewText = document.getElementById('no-review');

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    // 리뷰 객체 생성
    const newReview = {
        username: username,
        comment: comment,
        date: new Date().toLocaleString()
    };

    reviews.push(newReview);
    renderReviews();

    // 폼 초기화
    reviewForm.reset();
});

function renderReviews() {
    if (reviews.length > 0) {
        noReviewText.style.display = 'none';
    }

    const existingCards = reviewContainer.querySelectorAll('.review-card');
    existingCards.forEach(card => card.remove());

    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.style.border = '1px solid #ccc'; 
        reviewCard.style.margin = '10px 0';
        reviewCard.style.padding = '10px';

        reviewCard.innerHTML = `
            <h4>${review.username} <small style="color:gray;">(${review.date})</small></h4>
            <p>${review.comment}</p>
        `;

        reviewContainer.appendChild(reviewCard);
    });
}