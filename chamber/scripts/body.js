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
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
});