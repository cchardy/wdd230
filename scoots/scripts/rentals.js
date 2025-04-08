
const linksURL = "https://cchardy.github.io/wdd230/scoots/data/rentals.json"
const linksContainer = document.getElementById('rentals');

async function getRentalData() {
    try {
        const response = await fetch(dataURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // console.log(data);
        displayRatesTable(data.rentals);
        displayRatesCards(data.rentals);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
getRentalData();

const displayRatesTable = (rentals) => {
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

const displayRatesCards = (rentals) => {
    const priceCards = document.querySelectorAll(".rental-rides-info .card-body h3");

    priceCards.forEach((priceCard, index) => {
        const type = rentals[index];

        const cardInfo = document.createElement("div");

        cardInfo.innerHTML = `
        <p>Max persons: ${type.persons}</p>
            <h4>Reservation</h4>
            <div class="cost-type">
            <p><span class="cost">$${type.reservation_full_day}</span>/full</p>
            <span class="cost-sp">/</span>
            <p><span class="cost">$${type.reservation_half_day}</span>/half</p>
            </div>
            <h4>Same Day</h4>
            <div class="cost-type">
            <p><span class="cost">$${type.walk_in_full_day}</span>/full</p>
            <span class="cost-sp">/</span>
            <p><span class="cost">$${type.walk_in_half_day}</span>/half</p>
            </div>
            `;

        priceCard.insertAdjacentElement("afterend", cardInfo);
    });
};