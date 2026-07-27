// ==============================
// StudySync JavaScript
// ==============================

// Mobile Menu (for future use)

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Hero Button

const startBtn = document.querySelector(".primary-btn");

if (startBtn) {

    startBtn.addEventListener("click", function () {

        alert("Welcome to StudySync! Happy Learning 🚀");

    });

}

// Course Buttons

const courseButtons = document.querySelectorAll(".card button");

courseButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Course details will be available soon.");

    });

});

// Project Buttons

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        alert("Project page coming soon!");

    });

});

// Navbar Shadow

window.addEventListener("scroll", function () {

    const navbar = document.querySelector("header");

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// Footer Year

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML = `© ${year} StudySync. All Rights Reserved.`;

}

// Fade Animation

const cards = document.querySelectorAll(".card, .project-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});