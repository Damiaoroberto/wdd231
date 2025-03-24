document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById("directory");
    const toggleButton = document.getElementById("toggleView");
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");
    
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
    
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error fetching member data:", error);
        }
    }
    
    function displayMembers(members) {
        directory.innerHTML = "";
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");
            
            card.innerHTML = `
                <img src="${member.image}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            directory.appendChild(card);
        });
    }
    
    toggleButton.addEventListener("click", () => {
        directory.classList.toggle("grid-view");
        directory.classList.toggle("list-view");
        
        const isGridView = directory.classList.contains("grid-view");
        toggleButton.textContent = isGridView ? "Switch to List View" : "Switch to Grid View";
    });
    
    fetchMembers();
});

const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
const city = "YOUR_CITY_NAME";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById("temp").textContent = data.main.temp;
        document.getElementById("condition").textContent = data.weather[0].description;
    })
    .catch(error => console.log("Error fetching weather data:", error));
    const members = [
        { name: "Business 1", membership: "Gold", phone: "123-456", address: "123 St", website: "https://example.com", logo: "images/logo1.png" },
        { name: "Business 2", membership: "Silver", phone: "456-789", address: "456 St", website: "https://example.com", logo: "images/logo2.png" },
        { name: "Business 3", membership: "Bronze", phone: "789-012", address: "789 St", website: "https://example.com", logo: "images/logo3.png" },
    ];
    
    const spotlightContainer = document.getElementById("spotlight-container");
    
    
    const eligibleMembers = members.filter(member => member.membership === "Gold" || member.membership === "Silver");
    
    const randomSpotlights = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 2);
    
    
    randomSpotlights.forEach(member => {
        const spotlight = document.createElement("div");
        spotlight.innerHTML = `
            <h3>${member.name}</h3>
            <img src="${member.logo}" alt="${member.name} logo">
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        spotlightContainer.appendChild(spotlight);
    });
    
