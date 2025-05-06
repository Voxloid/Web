document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "#ffcc00";
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "white";
        });
    });
});

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}
