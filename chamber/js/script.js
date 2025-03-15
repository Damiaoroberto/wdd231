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
