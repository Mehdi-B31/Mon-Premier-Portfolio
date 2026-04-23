// On attrape le bouton LinkedIn
const linkedin = document.getElementById("btnLinkedin");
linkedin.addEventListener("click", function() {
    document.querySelector(".card").style.borderColor = "#0077b5"; // Bleu LinkedIn
    console.log("Clic sur LinkedIn");
});

// On attrape le bouton GitHub
const github = document.getElementById("btnGithub");
github.addEventListener("click", function() {
    document.querySelector(".card").style.borderColor = "#333"; // Gris foncé GitHub
    console.log("Clic sur GitHub");
});