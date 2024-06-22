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
        window.location.href = 'mailto:sr@srxlct.com';
    });

    copyEmailButton.addEventListener('click', () => {
        navigator.clipboard.writeText("sr@srxlct.com").then(() => {
            showCustomPopup("Email copied to clipboard!");
            copyEmailButton.innerHTML = '<i class="fas fa-check"></i> Copied';
            setTimeout(() => {
                copyEmailButton.innerHTML = '<i class="fas fa-copy"></i> Copy email';
            }, 3000);
        });
    });

    function showCustomPopup(message) {
        const popup = document.createElement('div');
        popup.className = 'custom-popup';
        popup.textContent = message;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add('visible');
        }, 10);

        setTimeout(() => {
            popup.classList.remove('visible');
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 500);
        }, 3000);
    }
});
