document.getElementById("btnWohnzimmer").addEventListener("click", function() {
    this.style.backgroundColor = "#f5f5f5";
    this.style.color = "#969696";
    document.getElementById("btnSchlafzimmer").style.backgroundColor = "#969696";
    document.getElementById("btnKueche").style.backgroundColor = "#969696";
    document.getElementById("btnServer").style.backgroundColor = "#969696";
    document.getElementById("btnAllesAus").style.backgroundColor = "#969696";
    document.getElementById("btnSchlafzimmer").style.color = "#ffffff";
    document.getElementById("btnKueche").style.color = "#ffffff";
    document.getElementById("btnServer").style.color = "#ffffff";
    document.getElementById("btnAllesAus").style.color = "#ffffff";
});
document.getElementById("btnSchlafzimmer").addEventListener("click", function() {
    this.style.backgroundColor = "#f5f5f5";
    this.style.color = "#969696";
    document.getElementById("btnWohnzimmer").style.backgroundColor = "#969696";
    document.getElementById("btnKueche").style.backgroundColor = "#969696";
    document.getElementById("btnServer").style.backgroundColor = "#969696";
    document.getElementById("btnAllesAus").style.backgroundColor = "#969696";
    document.getElementById("btnWohnzimmer").style.color = "#ffffff";
    document.getElementById("btnKueche").style.color = "#ffffff";
    document.getElementById("btnServer").style.color = "#ffffff";
    document.getElementById("btnAllesAus").style.color = "#ffffff";
});
document.getElementById("btnKueche").addEventListener("click", function() {
    this.style.backgroundColor = "#f5f5f5";
    this.style.color = "#969696";
    document.getElementById("btnSchlafzimmer").style.backgroundColor = "#969696";
    document.getElementById("btnWohnzimmer").style.backgroundColor = "#969696";
    document.getElementById("btnServer").style.backgroundColor = "#969696";
    document.getElementById("btnAllesAus").style.backgroundColor = "#969696";
    document.getElementById("btnSchlafzimmer").style.color = "#ffffff";
    document.getElementById("btnWohnzimmer").style.color = "#ffffff";
    document.getElementById("btnServer").style.color = "#ffffff";
    document.getElementById("btnAllesAus").style.color = "#ffffff";
});
document.getElementById("btnServer").addEventListener("click", function() {
    this.style.backgroundColor = "#f5f5f5";
    this.style.color = "#969696";
    document.getElementById("btnSchlafzimmer").style.backgroundColor = "#969696";
    document.getElementById("btnKueche").style.backgroundColor = "#969696";
    document.getElementById("btnWohnzimmer").style.backgroundColor = "#969696";
    document.getElementById("btnAllesAus").style.backgroundColor = "#969696";
    document.getElementById("btnSchlafzimmer").style.color = "#ffffff";
    document.getElementById("btnKueche").style.color = "#ffffff";
    document.getElementById("btnWohnzimmer").style.color = "#ffffff";
    document.getElementById("btnAllesAus").style.color = "#ffffff";
});
document.getElementById("btnAllesAus").addEventListener("click", function() {
    this.style.backgroundColor = "#f5f5f5";
    this.style.color = "#969696";
    document.getElementById("btnSchlafzimmer").style.backgroundColor = "#969696";
    document.getElementById("btnKueche").style.backgroundColor = "#969696";
    document.getElementById("btnServer").style.backgroundColor = "#969696";
    document.getElementById("btnWohnzimmer").style.backgroundColor = "#969696";
    document.getElementById("btnSchlafzimmer").style.color = "#ffffff";
    document.getElementById("btnKueche").style.color = "#ffffff";
    document.getElementById("btnServer").style.color = "#ffffff";
    document.getElementById("btnWohnzimmer").style.color = "#ffffff";
});

function wohnzimmerBtn() {
    document.getElementById("wohnzimmer").style.display = "block";
    document.getElementById("schlafzimmer").style.display = "none";
    document.getElementById("kueche").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("allesaus").style.display = "none";
}
function schlafzimmerBtn() {
    document.getElementById("wohnzimmer").style.display = "none";
    document.getElementById("schlafzimmer").style.display = "block";
    document.getElementById("kueche").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("allesaus").style.display = "none";
}
function kuecheBtn() {
    document.getElementById("wohnzimmer").style.display = "none";
    document.getElementById("schlafzimmer").style.display = "none";
    document.getElementById("kueche").style.display = "block";
    document.getElementById("server").style.display = "none";
    document.getElementById("allesaus").style.display = "none";
}
function serverBtn() {
    document.getElementById("wohnzimmer").style.display = "none";
    document.getElementById("schlafzimmer").style.display = "none";
    document.getElementById("kueche").style.display = "none";
    document.getElementById("server").style.display = "block";
    document.getElementById("allesaus").style.display = "none";
}
function allesAusBtn() {
    document.getElementById("wohnzimmer").style.display = "none";
    document.getElementById("schlafzimmer").style.display = "none";
    document.getElementById("kueche").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("allesaus").style.display = "block";
}