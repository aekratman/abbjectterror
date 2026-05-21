document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".firefly-container");
    if (!container) return;

    container.style.width = "700px";
    container.style.height = "100px";
    container.style.overflow = "hidden";
    container.style.position = "relative";
    // container.style.border = "2px solid white";
    container.style.margin = "20px auto";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    container.appendChild(canvas);
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    const fireflies = [];
    const numFireflies = 30;

    class Firefly {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.radius = Math.random() * 3 + 2;
            this.alpha = Math.random() * 0.5 + 0.5;
        }

        move() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 100, ${this.alpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "yellow";
            ctx.fill();
        }
    }

    for (let i = 0; i < numFireflies; i++) {
        fireflies.push(new Firefly());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        fireflies.forEach(firefly => {
            firefly.move();
            firefly.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
    });
});
