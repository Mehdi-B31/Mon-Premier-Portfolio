const linkedin = document.getElementById("btnLinkedin");
linkedin.addEventListener("click", function() {
    document.querySelector(".card").style.borderTopColor = "#0077b5"; // Bleu LinkedIn
});

const github = document.getElementById("btnGithub");
github.addEventListener("click", function() {
    document.querySelector(".card").style.borderTopColor = "#333"; // Noir GitHub
});