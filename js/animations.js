
// Additional animation observer for future components

const animatedElements = document.querySelectorAll(".animate-on-scroll");

const animationObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            animationObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

animatedElements.forEach(element => {
    animationObserver.observe(element);
});


// Subtle mouse movement for elements that opt in

document.querySelectorAll("[data-mouse-effect]").forEach(element => {

    element.addEventListener("mousemove", event => {

        const rect = element.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        element.style.setProperty("--mouse-x", `${x}px`);
        element.style.setProperty("--mouse-y", `${y}px`);

    });

});
