const membersURL = "https://cchardy.github.io/wdd230/chamber/data/members.json"

async function getMembers() {
    const response = await fetch(membersURL)
    if (response.ok) {
        const data = await response.json()
        displayMembers(data.directory)
    }
}

getMembers()

const displayMembers = (members) => {

    members.forEach(member => {
        const memberCards = document.querySelector("#members")
        let card = document.createElement("section")
        let companyName = document.createElement("h3")
        let membershipLevel = document.createElement("p")
        let address = document.createElement("p")
        let phone = document.createElement("p")
        let website = document.createElement("a")

        companyName.textContent = member.company
        membershipLevel.textContent = member.membershipLevel
        address.textContent = member.address
        phone.textContent = member.phone
        website.setAttribute("href", `https://${member.website}`)
        website.textContent = member.website

        let logo = document.createElement("img")
        logo.setAttribute("src", member.logo)

        card.appendChild(logo)
        card.appendChild(companyName)
        card.appendChild(address)
        card.appendChild(phone)
        card.appendChild(website)
        memberCards.appendChild(card)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetch(displayMembers)
        .then(response => response.json())
        .then(data => {
            let index = 0;
            const infoDiv = document.getElementById('info');

            function rotateInfo() {
                infoDiv.textContent = data[index].message;
                index = (index + 1) % data.length;
            }

            rotateInfo(); // Show the first message immediately
            setInterval(rotateInfo, 3000); // Rotate every 3 seconds
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
            document.getElementById('info').textContent = 'Failed to load information.';
        });
});