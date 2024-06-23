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

    // Project item click functionality
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectName = item.getAttribute('data-url');
            window.location.href = `https://srxlct.com/${projectName}`;
        });
    });
});
