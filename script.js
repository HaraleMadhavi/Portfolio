document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // Form Submission Alert
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
    });

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "Toggle Dark Mode";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});