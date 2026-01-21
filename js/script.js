// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close menu when clicking a link (mobile UX)
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Run once on page load
revealOnScroll();
