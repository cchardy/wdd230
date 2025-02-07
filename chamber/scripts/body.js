//date footer
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

let year = document.querySelector("#date");
year.innerHTML = `&copy${currentYear}`;

let lastModifiedDate = document.querySelector("#lastModified");
lastModifiedDate.textContent = new Date(document.lastModified);

//dark mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});