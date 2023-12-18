/* Responsive menu */
function NavbarToggle() {
    let navbarToggle = document.querySelector('.header-navbar-toggle');

    if (navbarToggle.style.display === "none") {
        navbarToggle.style.display = "block";
    } else {
        navbarToggle.style.display = "none";
    }
}

/* Current year for footer */
var year = new Date();
document.getElementById('year').innerHTML = year.getFullYear();
