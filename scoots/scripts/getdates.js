function getCopyrightYear() {
    const year = new Date().getFullYear();
    document.getElementById("cYear").innerHTML = `&copy; ${year}`;
}

function getLastModified() {
    const lastModified = new Date(document.lastModified).toGMTString();
    document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;
}

function showSuccess() {
    const success = document.getElementById("email-banner");
    success.classList.remove("banner-hide");
    success.classList.add("banner-show");
    // Reset the display property after 3 seconds
    setTimeout(function () {
        success.classList.remove("banner-show");
        success.classList.add("banner-hide");
    }, 3000); // Hide the message after 3 seconds
}
function openModal() {
    document.getElementById("emailModal").style.display = "block";
}

function closeModal() {
    document.getElementById("emailModal").style.display = "none";
}

getCopyrightYear();
getLastModified();