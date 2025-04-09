// Array of country names
const countries = [
    "Argentina",
    "Australia",
    "Austria",
    "Belarus",
    "Belgium",
    "Brazil",
    "Canada",
    "Chile",
    "China",
    "Denmark",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Guatemala",
    "Hungary",
    "Iceland",
    "India",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Korea, South",
    "Mexico",
    "Netherlands",
    "New Zealand",
    "Norway",
    "Paraguay",
    "Peru",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "Singapore",
    "South Africa",
    "Spain",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Thailand",
    "United Kingdom",
    "United States",
];

// Function to populate the dropdown
function populateCountryDropdown() {
    const dropdown = document.getElementById("countryDropdown");

    // Clear existing options
    dropdown.innerHTML = "";

    // Add default option
    const defaultOption = document.createElement("option");
    defaultOption.text = "Select Country";
    defaultOption.value = "";
    dropdown.add(defaultOption);

    // Add country options
    countries.forEach((country) => {
        const option = document.createElement("option");
        option.text = country;
        option.value = country;
        dropdown.add(option);
    });
}
// Call the function
populateCountryDropdown();

function validateForm(event) {
    const elements = document.querySelectorAll("#start-date, #end-date, #vehicle, #riders, #name, #phone, #email, #countryDropdown, #agreement");
    const radioInputs = document.querySelectorAll('input[type="radio"][name="period"]');
    let isValid = true;

    elements.forEach((input) => {
        if (input.value.trim() === "") {
            isValid = false;
            showError();
        }
    });
    // Check if any radio option is selected
    let radioSelected = false;
    radioInputs.forEach((input) => {
        if (input.checked) {
            radioSelected = true;
        }
    });
    if (!radioSelected) {
        isValid = false;
        showError();
    }

    if (isValid) {
        openModal();
        // Form is valid, submit it
        event.preventDefault(); // Prevent form submission
    } else {
        alert("Error! Please correctly fill out the request!");
        event.preventDefault(); // Prevent form submission
    }
}
function showError() {
    const error = document.getElementById("submitmessage");
    error.textContent = "Error! Please correctly fill out the request!";
    error.classList.remove("hide");
    error.classList.add("error", "show");
    // Reset the display property after 3 seconds
    setTimeout(function () {
        error.classList.remove("error", "show");
        error.classList.add("hide");
    }, 3000); // Hide the message after 3 seconds
}
function openModal() {
    document.getElementById("successModal").style.display = "block";
}

function closeModal() {
    document.getElementById("successModal").style.display = "none";
}


const dataURL = "https://cchardy.github.io/wdd230/scoots/data/rentals.json";

async function getRentalData() {
    try {
        const response = await fetch(dataURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // console.log(data);
        displayRates(data.rentals);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
getRentalData();

const displayRates = (rentals) => {
    // console.log(rentals);

    const priceTable = document.querySelector(".pricing tbody");

    rentals.forEach((type) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${type.type}</td>
            <td>${type.persons}</td>
            <td>$${type.reservation_full_day}</td>
            <td>$${type.reservation_half_day}</td>
            <td>$${type.walk_in_full_day}</td>
            <td>$${type.walk_in_half_day}</td>
        `;
        priceTable.appendChild(row);
    });
};