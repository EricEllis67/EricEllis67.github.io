/* style.css - Controls the design and appearance */

/* Set up the overall page with a black background and white text */
body {
    background-color: #0b0b0b; /* Sleek near-black background */
    color: #f0f0f0;            /* Bright white-ish text for readability */
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 40px 20px;
    text-align: center;
}

/* Header Styling */
header {
    margin-bottom: 40px;
}

h1 {
    color: #00ffff; /* Neon cyan accent for your main title */
    margin-bottom: 5px;
}

/* Layout container for our sections */
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; /* Space between each box */
}

/* Individual Content Areas (Cards) */
.card {
    background-color: #1a1a1a; /* Slightly lighter dark gray for contrast */
    border: 1px solid #333333; /* Subtle border */
    border-radius: 8px;       /* Rounded corners */
    padding: 20px;
    width: 100%;
    max-width: 600px;         /* Keeps the cards from getting too wide */
    text-align: left;         /* Align text nicely inside the cards */
}

.card h2 {
    color: #ffffff;           /* Neon pink accent for section titles */
    margin-top: 0;
}

/* Styling for input fields inside cards */
input[type="number"] {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #555;
    background-color: #2b2b2b;
    color: #fff;
    margin-right: 10px;
    width: 150px;
}

/* Footer / Button Styling */
footer {
    margin-top: 40px;
}

button {
    background-color: #00ffff;
    color: #0b0b0b;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #00cccc; /* Darkens slightly when you hover over it */
}
