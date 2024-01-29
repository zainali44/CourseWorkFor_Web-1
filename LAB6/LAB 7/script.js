// Select elements
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');

// Set initial slide index and interval ID
let currentSlide = 0;
let intervalId;

// Function to show slide
function showSlide(index) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // Show the slide with the given index
    slides[index].style.display = 'block';
    // Update current slide index
    currentSlide = index;
}

// Function to start slider
function startSlider() {
    intervalId = setInterval(() => {
        // If the current slide is the last slide, show the first slide
        if (currentSlide === slides.length - 1) {
            showSlide(0);
        } else {
            // Otherwise, show the next slide
            showSlide(currentSlide + 1);
        }
    }, 3000); // Change slide every 2 seconds
}

// Function to stop slider
function stopSlider() {
    clearInterval(intervalId);
}

// Show the first slide
showSlide(0);

// Add event listeners to buttons
playBtn.addEventListener('click', startSlider);
pauseBtn.addEventListener('click', stopSlider);
