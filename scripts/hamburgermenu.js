let menuButton = document.querySelector("#menu");
let navList = document.querySelector("nav ul")
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open")
    navList.classList.toggle("open")
})

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}


if (detectMob()) {

}
else {
    document.getElementById("toggleMenu").style.display = "none";
}