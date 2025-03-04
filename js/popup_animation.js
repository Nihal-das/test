document.querySelectorAll(".popup-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transition = "transform 0.4s ease-out";
        item.style.transform = "scale(1.2)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transition = "transform 0.4s ease-in";
        item.style.transform = "scale(1)";
    });
});
