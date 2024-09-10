const marbles = document.querySelectorAll('.marble');
let currentMarbleIndex = 0;
let animationInterval;

// Function to activate the current marble
function activateMarble(index) {
    marbles.forEach((marble, i) => {
        marble.src = (i === index) ? 'marble2.jpg' : 'marble1.jpg';
    });
}

// Function to start animation
function startAnimation() {
    animationInterval = setInterval(() => {
        // Set current marble to inactive and move to next
        currentMarbleIndex = (currentMarbleIndex + 1) % marbles.length;
        activateMarble(currentMarbleIndex);
    }, 1000); // Every 1 second
}

// Start animation initially
startAnimation();


// Bonus feature: Clicking on a marble increases the animation speed
marbles.forEach((marble) => {
    marble.addEventListener('click', () => {
        clearInterval(animationInterval); // Stop previous interval
        startAnimationWithSpeed(500); // Increase speed to 0.5 second
    });
});

// Function to start animation with increased speed
function startAnimationWithSpeed(speed) {
    animationInterval = setInterval(() => {
        currentMarbleIndex = (currentMarbleIndex + 1) % marbles.length;
        activateMarble(currentMarbleIndex);

    }, speed);
}

// Event listeners to pause and resume animation
marbles.forEach((marble, index) => {
    marble.addEventListener('mouseover', () => {
        console.log('Mouse over');
        clearInterval(animationInterval); // Stop animation
    });

    marble.addEventListener('mouseout', () => {
        startAnimation(); // Resume animation
    });
});
