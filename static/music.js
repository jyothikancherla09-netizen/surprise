function getMusic() {
    return document.getElementById("bgMusic");
}

function resumeMusic() {
    const music = getMusic();
    if (!music) return;

    if (sessionStorage.getItem("musicPlaying") === "true") {

        const savedTime = sessionStorage.getItem("musicTime");
        if (savedTime) {
            music.currentTime = parseFloat(savedTime);
        }

        music.play().catch(() => {});
    }
}

function saveMusicTime() {
    const music = getMusic();
    if (!music) return;

    sessionStorage.setItem("musicTime", music.currentTime);
}

function stopMusic() {
    const music = getMusic();
    if (!music) return;

    music.pause();
    music.currentTime = 0;

    sessionStorage.removeItem("musicPlaying");
    sessionStorage.removeItem("musicTime");
}
