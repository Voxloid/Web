document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.getElementById("orderForm");
    
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let quantity = document.getElementById("quantity").value.trim();

        if (name === "" || email === "" || quantity === "") {
            alert("Please fill in all required fields!");
            return;
        }

        alert("Thank you for your order, " + name + "!");

        orderForm.reset(); // Reset the form
    });

    // Highlight fields on focus
    document.querySelectorAll("input, textarea, select").forEach(element => {
        element.addEventListener("focus", function() {
            this.style.border = "2px solid #ffa500";
        });

        element.addEventListener("blur", function() {
            this.style.border = "1px solid #ccc";
        });
    });
});
