document.addEventListener("DOMContentLoaded", () => {
    // Preloader functionality
    gsap.to(".draw", {
        duration: 2,
        strokeDashoffset: 0,
        ease: "power2.inOut",
        onComplete: () => {
            const preloader = document.getElementById('preloader');
            gsap.to(preloader, {
                duration: 0.5,
                opacity: 0,
                onComplete: () => {
                    preloader.style.display = 'none';
                }
            });
        }
    });

    // Book a call button functionality
    const bookCallButton = document.querySelector('.book-call');
    bookCallButton.addEventListener('click', () => {
        window.location.href = 'mailto:your-email@example.com';
    });

    document.addEventListener("DOMContentLoaded", () => {
        // Smooth transition to project pages
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const target = event.target.getAttribute('href');
                gsap.to(document.body, { opacity: 0, duration: 0.5, onComplete: () => {
                    window.location.href = target;
                }});
            });
        });
    });
});
