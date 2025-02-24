function handleLastVisit() {
    const topMessage = document.querySelector(".top-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = new Date().getTime();

    if (!lastVisit) {
        topMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDifference = currentVisit - lastVisit;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (timeDifference < 24 * 60 * 60 * 1000) {
            topMessage.textContent = "Back so soon! Awesome!";
        } else {
            const dayText = daysDifference === 1 ? "day" : "days";
            topMessage.textContent = `You last visited ${daysDifference} ${dayText} ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentVisit);
}

document.addEventListener("DOMContentLoaded", handleLastVisit);