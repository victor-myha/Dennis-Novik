var home = document.querySelector(".home");
var about = document.querySelector(".about");


function selectedAbout() {
    if (home.classList.contains("active")) {
        home.classList.remove("active")
        about.className = "active";
    }
    else {
        about.className = "active"; 
    }
}
function selectedHome() {
    if (about.classList.contains("active")) {
        about.classList.remove("active")
        home.className = "active";
    }
    else {
        home.className = "active"; 
    }
}

home.addEventListener('click', selectedHome);
about.addEventListener('click', selectedAbout);