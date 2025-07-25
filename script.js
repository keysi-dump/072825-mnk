// SCENE TRANSITIONS

// Scene 1 → Scene 2
document.getElementById("envelope").addEventListener("click", () => {
    goToScene(2);
});

// Scene 2 → Scene 3
document.getElementById("heart").addEventListener("click", () => {
    goToScene('love-check');  // This is where the love question shows
});

// Love Check Logic
function loveAnswer(isYes) {
    if (isYes) {
        goToScene(3); // Proceed to real Scene 3
    } else {
        goToScene('scene-reject'); // Show rejection scene
    }
}

// Universal Scene Switcher (works for both numbers and IDs)
function goToScene(id) {
    const scenes = document.querySelectorAll(".scene");
    scenes.forEach(scene => scene.classList.remove("active"));

    const target = typeof id === "number"
        ? document.getElementById(`scene${id}`)
        : document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }
}



function createHeartsRain() {
    const container = document.querySelector(".heart-rain");
    container.innerHTML = ''; // Clear existing hearts

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDelay = Math.random() * 5 + "s";
        heart.style.fontSize = (Math.random() * 1 + 1) + "rem";
        container.appendChild(heart);
    }
}

// Trigger it when going to love-check
function goToScene(id) {
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(scene => scene.classList.remove('active'));

    const target = typeof id === "number" ? document.getElementById(`scene${id}`) : document.getElementById(id);
    if (target) {
        target.classList.add('active');
        if (id === 'love-check') createHeartsRain(); // ❤️ Rain if love-check
    }
}

