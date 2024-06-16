document.addEventListener("DOMContentLoaded", () => {
    function updateTime() {
        const timeElement = document.getElementById('time');
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }

    setInterval(updateTime, 1000);
    updateTime();

    const contactMeButton = document.getElementById('contact-me');
    const copyEmailButton = document.getElementById('copy-email');

    contactMeButton.addEventListener('click', () => {
        window.location.href = 'mailto:email@example.com';
    });

    copyEmailButton.addEventListener('click', () => {
        navigator.clipboard.writeText("denis@srxlct.com").then(() => {
            alert("Email copied to clipboard!");
        });
    });
});
