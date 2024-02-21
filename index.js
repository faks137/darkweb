// This is the additional JavaScript code for the typing effect
function typingEffect(element, text) {
    const delay = 100;
    let index = 0;

    async function type() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            await new Promise(resolve => setTimeout(resolve, delay));
            type();
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typing-effect');
    const text = 'YOU HAVE BEEN HACKED';

    typingEffect(typingElement, text);
});
