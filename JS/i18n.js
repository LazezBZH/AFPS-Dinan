// const langSwitcher = document.querySelector(".lang-switcher");
// const html = document.querySelector("html");

// const i18n = document.querySelectorAll(".i18n");

const loader = document.querySelector(".loader");
let container = document.querySelector(".container");

// if (!localStorage.getItem("lang")) {
//   localStorage.setItem("lang", "fr");
// }

// let chosenLang = localStorage.getItem("lang");

// langSwitcher.addEventListener("click", switchLang);

window.addEventListener("load", initLoad);

let loaded = sessionStorage.getItem("loadedAfps15") || false;
console.log(loaded);
if (loaded) {
  loader.style.display = "none";
  container.style.display = "block";
} else if (!loaded) {
  loader.style.display = "block";
  container.style.display = "none";
}
function initLoad() {
  if (!loaded) {
    stopLoader();
  }
}

function stopLoader() {
  setTimeout(() => {
    console.log("loaded", loaded);
    loaded = true;
    loader.style.display = "none";
    container.style.display = "block";
    sessionStorage.setItem("loadedAfps15", loaded);
  }, 3500);
}

// i18n

// let fr = [
//   { switch: "En" },
//   { comprendreLink: "Comprendre" },
//   { actionsLink: "Nos actions" },
//   { homeLink: "Accueil" },
//   { linksLink: "Liens" },
//   { contactLink: "Contact" },
//   { aboutUs: "Qui sommes nous?" },
// ];

// let en = [
//   { switch: "Fr" },
//   { comprendreLink: "Get informations" },
//   { actionsLink: "Our actions" },
//   { homeLink: "Home" },
//   { linksLink: "Links" },
//   { contactLink: "Contact" },
//   { aboutUs: "About us" },
// ];

// function setLang() {
//   html.setAttribute("lang", chosenLang);
//   if (html.getAttribute("lang") === "fr") {
//     writeInFrench();
//   } else if (html.getAttribute("lang") === "en") {
//     writeInEnglish();
//   }
// }
// setLang();
//au switch
// function switchLang() {
//   if (html.getAttribute("lang") === "fr") {
//     html.setAttribute("lang", "en");
//     localStorage.setItem("lang", "en");
//     writeInEnglish();
//   } else {
//     html.setAttribute("lang", "fr");
//     localStorage.setItem("lang", "fr");
//     writeInFrench();
//   }
// }
// function writeInFrench() {
//   i18n.forEach((element) => {
//     let attribut = element.getAttribute("data-i18n");
//     let objetCorrespondant = fr.find(
//       (item) => Object.keys(item)[0] === attribut
//     );
//     if (objetCorrespondant) {
//       let valeur = Object.values(objetCorrespondant)[0];
//       element.innerHTML = valeur;
//     }
//   });
// }

// function writeInEnglish() {
//   i18n.forEach((element) => {
//     let attribut = element.getAttribute("data-i18n");
//     let objetCorrespondant = en.find(
//       (item) => Object.keys(item)[0] === attribut
//     );
//     if (objetCorrespondant) {
//       let valeur = Object.values(objetCorrespondant)[0];
//       element.innerHTML = valeur;
//     }
//   });
// }
