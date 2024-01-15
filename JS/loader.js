// loader home = empêcher qu'il ne soit joué à chaque fois

const loader = document.querySelector(".loader");
let container = document.querySelector(".container");

window.addEventListener("load", stopLoader);
let loaded = sessionStorage.getItem("loaded") || false;
if (loaded) {
  loader.style.display = "none";
  container.style.display = "block";
}
sessionStorage.setItem("loaded", loaded);
function stopLoader() {
  setTimeout(() => {
    loaded = true;
    loader.style.display = "none";
    container.style.display = "block";
    sessionStorage.setItem("loaded", loaded);
  }, 3500);
}
