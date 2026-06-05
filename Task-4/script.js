// Smooth scroll highlight effect for active section
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;
    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop + 150 &&
            section.offsetTop + section.offsetHeight > fromTop + 150
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
