// Additional JavaScript for horror effect
const hackText = document.getElementById('hack-text');

// Randomize glitch effect on the text
setInterval(() => {
    const glitchText = 'Y0U H4VE B33N H4CK3D';
    let newHackText = '';
    for (let i = 0; i < glitchText.length; i++) {
        newHackText += Math.random() < 0.5 ? glitchText[i].toUpperCase() : glitchText[i].toLowerCase();
    }
    hackText.textContent = newHackText;
}, 200);

// Create a flickering effect on the image
const cyberImage = document.querySelector('.cyber-image');
setInterval(() => {
    cyberImage.style.opacity = Math.random() > 0.5 ? '0.7' : '1';
}, 500);
