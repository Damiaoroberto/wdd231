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

    

