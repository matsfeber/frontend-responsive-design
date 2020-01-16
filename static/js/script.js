// EventListeners, als je op het hartje klikt, hoverd of de niet meer hovered wordt er een functie aangeroepen.
document.getElementById("hart").addEventListener("click", click);
document.getElementById("hart").addEventListener("mouseover", remove);
document.getElementById("hart").addEventListener("mouseout", notRemoved);

// Hier maak ik variabelen aan voor de elementen die ik ga veranderen.
var hearth = document.getElementById("hart");
var link = document.getElementById("link");
var tekst = document.getElementById("tekst")

// Als je op het hartje klikt wordt deze functie aangeroepen.
function click() {
  // Kijk of het hartje al is opgeslagen of als dat zo is wordt de de stijl verandert door classes toe te voegen en te verwijderen.
  if (hearth.classList.contains("saved") || hearth.classList.contains("fa-times")) {
    hearth.classList.add("fa-hearth");
    hearth.classList.remove("fa-times");
    hearth.classList.remove("saved");
    link.classList.remove("saved");
    link.classList.add("display")
    tekst.innerHTML = "opslaan"
  }

  // Verander het hartje van kleur en voeg een tekst toe door het verwijderen en toevoegen van classes.
  else {
    hearth.classList.add("saved");
    hearth.classList.add("fa-hearth");
    hearth.classList.remove("fa-times");
    link.classList.add("saved");
    link.classList.remove("display");
    tekst.innerHTML = "Opgeslagen"

  }

}

function remove() {
  if (hearth.classList.contains("saved")) {
    tekst.innerHTML = "verwijder"
    hearth.classList.remove("fa-hearth");
    hearth.classList.add("fa-times");
    hearth.classList.remove("saved");

  }
};

// Als je over het hartje hoverd maar niet klikt wordt de style weer terug verandert, als je wel klikt wordt de functie click weer aangeroepen.
function notRemoved() {
  if (hearth.classList.contains("fa-times")) {
    hearth.classList.add("saved");
    hearth.classList.add("fa-hearth");
    hearth.classList.remove("fa-times");
    link.classList.add("saved");
    link.classList.remove("display");
    tekst.innerHTML = "Opgeslagen"
  }
}
