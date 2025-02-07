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
let darkButton = document.querySelector("#mode");
darkButton.addEventListener('click', () => {
    darkButton.classList.toggle("dark")
    if (darkButton.classList.contains("dark")) {
        document.documentElement.style.setProperty('--text-color1', 'white');
        document.documentElement.style.setProperty('--text-color2', 'black')
        document.documentElement.style.setProperty('--background-color', '#315659');
        document.documentElement.style.setProperty('--accent-color', '#7EA8BE');
        document.documentElement.style.setProperty('--header-color', '#28536B');
    }
    else {
        document.documentElement.style.setProperty('--text-color1', 'black');
        document.documentElement.style.setProperty('--text-color2', 'white');
        document.documentElement.style.setProperty('--background-color', '#A3C4BC');
        document.documentElement.style.setProperty('--accent-color', '#28536B');
        document.documentElement.style.setProperty('--header-color', '#7EA8BE');
    }
})