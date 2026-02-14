const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];

const colors = ["#ff6b6b","#ffd93d","#6bcBef","#b28dff","#ff9f9f"];

for (let i = 0; i < 150; i++) {
    confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        rotation: Math.random() * 360
    });
}

function drawConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(p => {

        ctx.save();

        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);

        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);

        ctx.restore();

        p.y += p.speed;
        p.rotation += 3;

        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }

    });

    requestAnimationFrame(drawConfetti);
}

drawConfetti();
