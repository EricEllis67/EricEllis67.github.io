/* style.css - Modern, centered, sleek dark theme */

/* Set up the overall page with a rich black background and centered alignment */
body {
    background-color: #050505; /* Deep, premium black */
    color: #e0e0e0;            /* Soft white for comfortable reading */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Central container that holds everything */
.container {
    width: 100%;
    max-width: 650px;
    padding: 40px 20px;
    text-align: center; /* Centers all words and text globally */
}

/* Header Styling */
header {
    margin-bottom: 25px;
}

h1 {
    font-size: 2.5rem;
    color: #00ffff; /* Glowing cyan */
    margin: 0 0 10px 0;
    letter-spacing: 1px;
}

.subtitle {
    color: #888888;
    font-size: 1.1rem;
    margin: 0;
}

/* Aesthetic Navigation Links */
.nav-links {
    margin: 25px 0 35px 0;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.nav-links a {
    color: #ff007f;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    transition: color 0.2s ease;
}

.nav-links a:hover {
    color: #00ffff;
}

/* Sleek Card Styling with subtle borders and spacing */
.card {
    background-color: #121212; /* Clean dark charcoal card background */
    border: 1px solid #222222; /* Minimal border */
    border-radius: 12px;       /* Smooth rounded corners */
    padding: 25px 30px;
    margin-bottom: 20px;
    text-align: center;        /* Keeps content inside cards perfectly centered */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Soft shadow for depth */
}

.card h2 {
    color: #ff007f;           /* Neon pink for section headings */
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 12px;
}

.card p {
    line-height: 1.6;
    margin: 0;
    color: #cccccc;
}

/* Mini Game Controls Layout */
.game-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
}

input[type="number"] {
    padding: 10px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #333333;
    background-color: #1a1a1a;
    color: #ffffff;
    width: 100px;
    text-align: center;
}

/* Modern Button Design */
button {
    background-color: #00ffff;
    color: #050505;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.1s ease, background-color 0.2s ease;
}

button:hover {
    background-color: #00cccc;
    transform: translateY(-2px); /* Slight lift effect on hover */
}

.accent-btn {
    background-color: #ff007f;
    color: #ffffff;
}

.accent-btn:hover {
    background-color: #e00070;
}

/* Footer Styling */
footer {
    margin-top: 30px;
}

#message, #gameMessage {
    margin-top: 12px;
    font-weight: 500;
}
