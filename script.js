const track = document.getElementById('carousel');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;
const cardsVisible = 3;
let currentIndex = 0;
function moveCarousel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalCards - cardsVisible) currentIndex = totalCards - cardsVisible;
    const cardWidth = cards[0].offsetWidth + 15;
    const translateX = -currentIndex * cardWidth;
    track.style.transform = `translateX(${translateX}px)`;}
