const linkedin = document.getElementById("btnLinkedin");
linkedin.addEventListener("click", function() {
    document.querySelector(".card").style.borderTopColor = "#0077b5"; // Bleu LinkedIn
});

const github = document.getElementById("btnGithub");
github.addEventListener("click", function() {
    document.querySelector(".card").style.borderTopColor = "#333"; // Noir GitHub
});
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// --- 1. AU CHARGEMENT : On vérifie s'il y a une note dans la mémoire ---
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
}

// --- 2. AU CLIC : On change le thème ET on enregistre le choix ---
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const icon = themeToggle.querySelector("i");
    
    if (body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark"); // On écrit "dark" dans le tiroir
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light"); // On écrit "light" dans le tiroir
    }
});