const linkedin = document.getElementById("btnLinkedin");
linkedin.addEventListener("click", function() {
    document.querySelector(".card").style.borderTopColor = "#0077b5"; // Bleu LinkedIn
});

const github = document.getElementById("btnGithub");
github.addEventListener("click", function() {
    document.querySelector(".card").style.borderTopColor = "#333"; // Noir GitHub
});
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    const icon = themeToggle.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }
});