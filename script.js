// ==============================
// AI PORTFOLIO - JAVASCRIPT
// ==============================

// Show a message in the browser console
console.log("AI Portfolio Started.");

// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// ==============================
// CURRENT YEAR IN FOOTER
// ==============================

const footerText = document.querySelector("footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Syada Nusrat Nahar. Built as part of my learning journey.`;
}


// ==============================
// SMOOTH SCROLLING
// ==============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
