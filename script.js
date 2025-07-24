// Scene 1 → Scene 2
document.getElementById("envelope").addEventListener("click", () => {
    document.getElementById("scene1").classList.remove("active");
    document.getElementById("scene2").classList.add("active");
});

// Scene 2 → Scene 3 (you’ll build this next!)
document.getElementById("heart").addEventListener("click", () => {
    document.getElementById("scene2").classList.remove("active");
    document.getElementById("scene3").classList.add("active");
    // Next: show Scene 3
});



document.getElementById("brain").addEventListener("click", () => {
    document.getElementById("scene3").classList.remove("active");
    document.getElementById("scene4").classList.add("active");
});

function goToScene(num) {
    document.querySelectorAll(".scene").forEach(scene => {
        scene.classList.remove("active");
    });
    document.getElementById(`scene${num}`).classList.add("active");
}
