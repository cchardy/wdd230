document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('close-banner');

    function checkDayAndDisplayBanner() {
        const today = new Date().getDay(); // 1 = Monday, 2 = Tuesday, 3 = Wednesday

        if (today >= 1 && today <= 3) { //Monday, Tuesday, Wednesday
            banner.style.display = 'block';
        }
    }

    closeBannerButton.addEventListener("click", () => {
        banner.style.display = "none";
    });

    checkDayAndDisplayBanner();
});