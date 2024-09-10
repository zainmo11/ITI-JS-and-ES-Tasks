// Array of image sources
const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg'];
let currentIndex = 0;
let slideshowInterval;

// Select DOM elements
const imageElement = document.getElementById('image');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const slideshowButton = document.getElementById('slideshow');
const stopButton = document.getElementById('stop');

// Function to show the next image
function showNextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    }
    imageElement.src = images[currentIndex];
}

// Function to show the previous image
function showPreviousImage() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    imageElement.src = images[currentIndex];
}

// Function to start slideshow
function startSlideshow() {
    slideshowInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the start
        imageElement.src = images[currentIndex];
    }, 2000); // Change every 2 seconds
}

// Function to stop slideshow
function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Event listeners for buttons
nextButton.addEventListener('click', () => {
    showNextImage();
});

previousButton.addEventListener('click', () => {
    showPreviousImage();
});

slideshowButton.addEventListener('click', () => {
    startSlideshow();
});

stopButton.addEventListener('click', () => {
    stopSlideshow();
});
