document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { name: "CSE 110", type: "cse" },
        { name: "WDD 130", type: "wdd" },
        { name: "CSE 111", type: "cse" },
        { name: "CSE 210", type: "cse" },
        { name: "WDD 131", type: "wdd" },
        { name: "WDD 231", type: "wdd" }
    ];

    const coursesContainer = document.querySelector(".courses");
    const allBtn = document.getElementById("all-btn");
    const cseBtn = document.getElementById("cse-btn");
    const wddBtn = document.getElementById("wdd-btn");

    function displayCourses(filter) {
        coursesContainer.innerHTML = "";
        let filteredCourses = filter ? courses.filter(course => course.type === filter) : courses;
        
        filteredCourses.forEach(course => {
            let btn = document.createElement("button");
            btn.textContent = course.name;
            btn.classList.add(course.type);
            coursesContainer.appendChild(btn);
        });
    }

    allBtn.addEventListener("click", () => displayCourses());
    cseBtn.addEventListener("click", () => displayCourses("cse"));
    wddBtn.addEventListener("click", () => displayCourses("wdd"));
    
    displayCourses(); 
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
    

