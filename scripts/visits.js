const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(localStorage.getItem("visits-local"));

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}
else {
    visitsDisplay.textContent = "This is your first visit. Welcome!";
}

numVisits++;
localStorage.setItem("visits-local", numVisits);