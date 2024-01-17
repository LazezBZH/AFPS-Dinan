const langSwitcher = document.querySelector(".lang-switcher");
const html = document.querySelector("html");

const i18n = document.querySelectorAll(".i18n");

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "fr");
}

let chosenLang = localStorage.getItem("lang");

langSwitcher.addEventListener("click", switchLang);

// i18n

let fr = [
  { switch: "En" },
  { comprendreLink: "Comprendre" },
  { actionsLink: "Nos actions" },
  { homeLink: "Accueil" },
  { linksLink: "Liens" },
  { contactLink: "Contact" },
  { aboutUs: "Qui sommes nous?" },
];

let en = [
  { switch: "Fr" },
  { comprendreLink: "Get informations" },
  { actionsLink: "Our actions" },
  { homeLink: "Home" },
  { linksLink: "Links" },
  { contactLink: "Contact" },
  { aboutUs: "About us" },
];

function setLang() {
  html.setAttribute("lang", chosenLang);
  if (html.getAttribute("lang") === "fr") {
    writeInFrench();
  } else if (html.getAttribute("lang") === "en") {
    writeInEnglish();
  }
}
setLang();
//au switch
function switchLang() {
  if (html.getAttribute("lang") === "fr") {
    html.setAttribute("lang", "en");
    localStorage.setItem("lang", "en");
    writeInEnglish();
  } else {
    html.setAttribute("lang", "fr");
    localStorage.setItem("lang", "fr");
    writeInFrench();
  }
}
function writeInFrench() {
  i18n.forEach((element) => {
    let attribut = element.getAttribute("data-i18n");
    let objetCorrespondant = fr.find(
      (item) => Object.keys(item)[0] === attribut
    );
    if (objetCorrespondant) {
      let valeur = Object.values(objetCorrespondant)[0];
      element.innerHTML = valeur;
    }
  });
}

function writeInEnglish() {
  i18n.forEach((element) => {
    let attribut = element.getAttribute("data-i18n");
    let objetCorrespondant = en.find(
      (item) => Object.keys(item)[0] === attribut
    );
    if (objetCorrespondant) {
      let valeur = Object.values(objetCorrespondant)[0];
      element.innerHTML = valeur;
    }
  });
}
