export function playLoveSong() {
    const audio = new Audio('./src/assets/audio/jap.mp3');
    audio.volume = 0;
    audio.loop = true;

    audio.play().catch((e) => {
        console.warn("Autoplay gagal, mungkin perlu interaksi user dulu:", e);
    });

    // Fade-in
    let volume = 0;
    const fadeIn = setInterval(() => {
        if (volume < 1) {
            volume += 0.05;
            audio.volume = Math.min(volume, 1);
        } else {
            clearInterval(fadeIn);
        }
    }, 200);
}