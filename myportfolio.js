document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown-btn");

    dropdowns.forEach(button => {
        button.addEventListener("click", function() {
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                // Hide all dropdowns first
                document.querySelectorAll(".dropdown-content").forEach(drop => drop.style.display = "none");
                content.style.display = "block";
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function(event) {
        if (!event.target.matches(".dropdown-btn")) {
            document.querySelectorAll(".dropdown-content").forEach(drop => drop.style.display = "none");
        }
    });
});
