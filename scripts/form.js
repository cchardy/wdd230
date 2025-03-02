const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}


//password confirmation
const pwd1 = document.querySelector("#password");
const pwd2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pwd2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (pwd1.value !== pwd2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "show";
        pwd2.style.backgroundColor = "#fff0f3";
        pwd2.value = "";
        pwd2.focus();
    } else {
        message.style.display = "none";
        pwd2.style.backgroundColor = "#fff";
        pwd2.style.color = "#000";
    }
}

// Required email
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleSubmit(event) {
        // Prevent default form submission
        event.preventDefault();

        // Access form elements
        let formt = event.target;
        let formData = new FormData(formt);

        // Display form element values
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
});

//
let button = document.querySelector("#rateButton")

button.addEventListener('click', setDateOfSubmission)

function setDateOfSubmission() {
    document.querySelector("#dateTime").value = Date.now()
}