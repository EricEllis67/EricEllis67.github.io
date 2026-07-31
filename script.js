// Wait for the webpage to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the button element from our HTML using its ID
    const colorButton = document.getElementById('colorButton');

    // Define an array of fun background colors
    const colors = ['#e74c3c', '#2ecc71', '#9b59b6', '#f1c40f', '#1abc9c'];

    // Listen for a 'click' event on the button
    colorButton.addEventListener('click', () => {
        // Pick a random color from our array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Change the card's background color dynamically
        const card = document.querySelector('.card');
        card.style.backgroundColor = randomColor;
        
        console.log('Button clicked! Background color changed to: ' + randomColor);
    });

});
