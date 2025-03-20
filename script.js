let slideIndex = 0;
const slides = [
    'quiz1.jpg',
    'quiz2.jpg',
    'quiz3.jpg'
    // Add more image paths as needed
];

function openSlideshow(index) {
    slideIndex = index;
    document.getElementById('slideshow-modal').style.display = 'block';
    document.getElementById('current-slide').src = slides[slideIndex];
}

function closeSlideshow() {
    document.getElementById('slideshow-modal').style.display = 'none';
}

function changeSlide(direction) {
    slideIndex += direction;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    document.getElementById('current-slide').src = slides[slideIndex];
}

// Close modal when clicking outside
document.querySelector('.close').onclick = closeSlideshow;
window.onclick = function(event) {
    if (event.target == document.getElementById('slideshow-modal')) {
        closeSlideshow();
    }
} 