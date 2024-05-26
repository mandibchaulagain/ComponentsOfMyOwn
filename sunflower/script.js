const maxSeeds = 250;
const tau = Math.PI * 2;
const phi = (Math.sqrt(5) + 1) / 2;
const scaleFactor = 1 / 40;
const size = 600;
const slider = document.getElementById('slider');
const seedCountDisplay = document.getElementById('seedCount');
const sunflower = document.getElementById('sunflower');

function createDot(x, y, lit) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (!lit) dot.classList.add('grey');
    dot.style.transform = `translate(${x}px, ${y}px)`;
    return dot;
}

function drawSunflower(seeds) {
    sunflower.innerHTML = '';
    for (let i = 0; i < seeds; i++) {
        const theta = i * tau / phi;
        const r = Math.sqrt(i) * scaleFactor * size;
        const x = r * Math.cos(theta) + size / 2;
        const y = r * Math.sin(theta) + size / 2;
        sunflower.appendChild(createDot(x, y, true));
    }
    for (let j = seeds; j < maxSeeds; j++) {
        const x = Math.cos(tau * j / (maxSeeds - 1)) * size * 0.45 + size / 2;
        const y = Math.sin(tau * j / (maxSeeds - 1)) * size * 0.45 + size / 2;
        sunflower.appendChild(createDot(x, y, false));
    }
}

slider.addEventListener('input', (event) => {
    const seeds = event.target.value;
    seedCountDisplay.textContent = seeds;
    drawSunflower(seeds);
});

// Initial draw
drawSunflower(slider.value);
