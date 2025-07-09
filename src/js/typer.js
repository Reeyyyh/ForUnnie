export function typeHeading(message, element, button) {
    let i = 0;

    function typing() {
        if (i <= message.length) {
            element.textContent = message.slice(0, i);
            i++;
            setTimeout(typing, 250);
        } else {
            button.classList.remove('hidden', 'opacity-0');
            button.classList.add('inline-block', 'opacity-100');
        }
    }

    typing();
}

export function typeParagraph(text, element, callback) {
    const boldLines = [
        "AKU SUKA SAMA KAMU ICA",
        "LOVE YOUU UNIEEE ♥️",
        "And... if you don't mind...",
        "Can I be someone special to you?",
        "Will you be my girlfriend?"
    ];

    element.innerHTML = "";

    const isBold = boldLines.includes(text);
    const container = document.createElement(isBold ? 'strong' : 'span');
    if (isBold) container.classList.add('font-bold');

    let i = 0;

    function typing() {
        if (i < text.length) {
            container.textContent += text.charAt(i);
            i++;
            setTimeout(typing, 40);
        } else {
            if (typeof callback === "function") callback();
        }
    }

    element.appendChild(container);
    typing();
}