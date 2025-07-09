// === index.js ===
import { playLoveSong } from './audio.js';
import { typeHeading, typeParagraph } from './typer.js';

const button = document.getElementById('nextBtn');
const answerButtons = document.getElementById('answerButtons');
const paragraph = document.querySelector('p');
const heading = document.getElementById('heading-text');

const texts = [
    "Jujur bingung mau mulai bagaimana?",
    "Gemink malu banget sumpah😭",
    "Ya namanya juga first impression",
    "Tapi, makin hari gemink makin nyaman sama unnie",
    "Rasanya beda aja gitu, kayak... pengen terus deket",
    "Ya walaupun kadang suka bully bully unnie juga sih😹",
    "Kadang salting salting sendiri kalau chatan sama unniee🥺",
    "😭😭😭😭😭😭😭😭😭😭😭😭😭😭",
    "Hmmmmmmmmmmmm",
    "HMMMMMMMMMMMM",
    "Jadi Intinya karena gemink juga tidak pintar bikin kata kata",
    "Gemink mau bilang kalau.....",
    "Gemink suka sama unnie",
    "nih yaa biar jelas",
    "AKU SUKA SAMA KAMU ICA",
    "LOVE YOUU UNIEEE ♥️",
    "And... if you don't mind...",
    "Can I be someone special to you?",
    "Will you be my girlfriend?"
];

let textIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => typeHeading("Hai, Unniee", heading, button), 1000);
});

button.addEventListener('click', () => {
    const currentText = texts[textIndex];

    if (textIndex === texts.length - 1) {
        button.classList.add('hidden');
        setTimeout(() => {
            answerButtons.classList.remove('hidden');
            answerButtons.classList.add('opacity-100');
        }, 600);
    }

    paragraph.textContent = '';
    button.disabled = true;

    typeParagraph(currentText, paragraph, () => {
        button.disabled = false;
    });

    textIndex = (textIndex + 1) % texts.length;
});

// YES / NO
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
    paragraph.textContent = ''; // Kosongkan isi awal
    answerButtons.classList.add('hidden');

    // Teks pertama (typer)
    const firstText = document.createElement('p');
    firstText.classList.add('text-green-600', 'text-2xl', 'font-bold', 'text-center');
    paragraph.appendChild(firstText);

    typeParagraph("YIPPPIII! 💕 Unnie sekarang pacarnya Gemink! 🥳", firstText, () => {
        // Setelah selesai ketik, munculkan GIF dengan transisi
        const gif = document.createElement('img');
        gif.src = './src/assets/gif/cat.gif';
        gif.alt = 'Cute Cat';
        gif.classList.add('mx-auto', 'mt-6', 'rounded-xl', 'shadow-lg', 'opacity-0', 'transition-opacity', 'duration-1000');
        gif.style.maxWidth = '300px';
        paragraph.appendChild(gif);

        // Trigger transisi
        setTimeout(() => {
            gif.classList.remove('opacity-0');
            gif.classList.add('opacity-100');
        }, 500);

        // Setelah GIF ditampilkan, ketik teks kedua
        setTimeout(() => {
            const secondText = document.createElement('p');
            secondText.classList.add('text-green-600', 'text-2xl', 'font-bold', 'mt-4', 'text-center');
            paragraph.appendChild(secondText);

            typeParagraph("Makasihh yaa sudah nerima gemink😚🥰", secondText);
        }, 1500);
        setTimeout(() => {
            const secondText = document.createElement('p');
            secondText.classList.add('text-green-600', 'text-2xl', 'font-bold', 'mt-4', 'text-center');
            paragraph.appendChild(secondText);

            typeParagraph("(UDAHH YA GEMINKK MALUUU😭)", secondText);
        }, 1500);
    });

    playLoveSong();

    // Efek bunga 10 kali dengan jeda
    let times = 10;
    let delay = 2500;
    for (let i = 0; i < times; i++) {
        setTimeout(() => {
            for (let j = 0; j < 10; j++) {
                createFlower();
            }
        }, i * delay);
    }
});


const positions = [
    { left: '2%', top: '2%' },
    { left: '90%', top: '2%' },
    { left: '2%', top: '90%' },
    { left: '90%', top: '90%' },
    { left: '45%', top: '5%' },
    { left: '45%', top: '92%' },
    { left: '5%', top: '45%' },
    { left: '90%', top: '45%' },
    { left: '70%', top: '20%' },
    { left: '15%', top: '75%' },
    { left: '60%', top: '60%' }
];

noBtn.addEventListener('click', () => {
    const messages = [
        "Yakin gak mau? 🥺",
        "Coba pikir lagi deh 😢",
        "Masa sih gak mau 😭",
        "Unnie tega banget 😩",
        "Jangan gitu dong... 😿",
        "Tombol 'IYA' lebih bagus lho 😏",
        "Beneran nih?? nanti Nyesel lhooo 🙈",
        "Udah ah, pencet IYA aja 💕"
    ];

    // Tampilkan alert acak
    alert(messages[Math.floor(Math.random() * messages.length)]);

    // Perbesar tombol IYA
    const currentScale = parseFloat(yesBtn.dataset.scale || 1);
    const newScale = currentScale + 0.5;
    yesBtn.dataset.scale = newScale.toFixed(2);
    yesBtn.style.transform = `scale(${newScale})`;

    // Ambil posisi acak dari daftar
    const randomIndex = Math.floor(Math.random() * positions.length);
    const pos = positions[randomIndex];
    noBtn.style.position = 'fixed';
    noBtn.style.left = pos.left;
    noBtn.style.top = pos.top;
});


// di terima
function createFlower() {
    const emojis = ['🌸', '🌺', '🌼', '🌷', '💐', '💮', '🌹', '🌻'];
    const flower = document.createElement('div');

    flower.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    flower.className = 'flower animate-flowerUp';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.bottom = '0';
    flower.style.fontSize = '2.5rem';

    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 5000);
}



// finisher
import('./finisher-header.es5.min.js').then(() => {
    new FinisherHeader({
        count: 30,
        size: { min: 4, max: 10, pulse: 0.6 },
        speed: { x: { min: 0.05, max: 0.2 }, y: { min: 0.1, max: 0.4 } },
        colors: {
            background: "transparent",
            particles: ["#f472b6", "#facc15", "#38bdf8", "#f9a8d4", "#c084fc"]
        },
        blending: "overlay",
        opacity: { center: 0.9, edge: 0 },
        skew: -1.5,
        shapes: ["c", "s", "t"]
    });

    const canvasGlowColors = [
        "drop-shadow(0 0 25px rgba(244,114,182,1))",
        "drop-shadow(0 0 25px rgba(250,204,21,1))",
        "drop-shadow(0 0 25px rgba(56,189,248,1))",
        "drop-shadow(0 0 25px rgba(251,191,36,1))",
        "drop-shadow(0 0 25px rgba(192,132,252,1))"
    ];

    const applyGlow = () => {
        const canvas = document.getElementById('finisher-canvas');
        if (canvas) {
            const color = canvasGlowColors[Math.floor(Math.random() * canvasGlowColors.length)];
            canvas.style.filter = color;
        }
    };

    setTimeout(() => {
        const canvas = document.getElementById('finisher-canvas');
        if (canvas) {
            canvas.style.transition = "filter 1s ease-in-out";
            applyGlow();
            setInterval(applyGlow, 1500);
        }
    }, 1000);
});
