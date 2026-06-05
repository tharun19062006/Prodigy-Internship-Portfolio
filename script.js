// Change navbar background on scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
const toggle = document.getElementById("menu-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    links.classList.toggle("active");
});
