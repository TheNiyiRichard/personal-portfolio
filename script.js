document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Reveal Animation for Sections
    const sections = document.querySelectorAll('section');
    const revealSection = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };
    window.addEventListener('scroll', revealSection);
    revealSection();
});

// Reveal animation CSS class
const style = document.createElement('style');
style.innerHTML = `
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    section.active {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
