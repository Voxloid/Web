document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("orderForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const userName = document.getElementById("name").value;
        alert(`Thank you for your order, ${userName}!`);
        this.reset();
    });
});
