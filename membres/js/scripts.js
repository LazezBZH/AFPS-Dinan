// Variables globales
let lastId = 0; // id du dernier message affiché

// On attend le chargement du document
window.onload = () => {
  // On va chercher la zone texte
  let texte = document.querySelector("#texte");
  texte.addEventListener("keyup", verifEntree);

  // On va chercher le bouton valid
  let valid = document.querySelector("#valid");
  valid.addEventListener("click", ajoutMessage);

  // On charge les nouveaux messages
  setInterval(chargeMessages, 200);
};

/**
 * Charge les derniers messages en Ajax et les insère dans la discussion
 */
function chargeMessages() {
  // On instancie XMLHttpRequest
  let xmlhttp = new XMLHttpRequest();

  // On gère la réponse
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        // On a une réponse
        // On convertit la réponse en objet JS
        let messages = JSON.parse(this.response);
        // console.log(messages);
        // On retourne l'objet
        // messages.reverse();

        // On récupère la div #discussion
        let discussion = document.querySelector("#discussion");

        for (let message of messages) {
          // On transforme la date du message en JS
          let dateMessage = new Date(message.created_at);
          let pseudoId = "user" + message.users_id;

          // On ajoute le contenu avant le contenu actuel de discussion
          discussion.innerHTML += `
          <p class="msg-head">
          <img class="msg-avatar" src= ${message.avatar}>
          <span  class=${pseudoId}>${message.pseudo}
          </span> ${dateMessage.toLocaleString()} :</p><p class="msg-txt">${
            message.message
          } </p>`;
          discussion.scrollTop = discussion.scrollHeight;
          // On met à jour le lastId
          lastId = message.id;
          // let msgAvatar = document.querySelectorAll("msg-avatar");
          // ?()
        }
      } else {
        // On gère les erreurs
        let erreur = JSON.parse(this.response);
        alert(erreur.message);
      }
    }
  };

  // On ouvre la requête
  xmlhttp.open("GET", "ajax/chargeMessages.php?lastId=" + lastId);

  // On envoie
  xmlhttp.send();
}

/**
 * Cette fonction vérifie si on a appuyé sur la touche entrée
 */
function verifEntree(e) {
  if (e.key == "Enter") {
    ajoutMessage();
  }
}

/**
 * Cette fonction envoie le message en ajax à un fichier ajoutMessage.php
 */
function ajoutMessage() {
  // On récupère le message
  let message = document.querySelector("#texte").value;
  console.log("ici", message);

  // On vérifie si le message n'est pas vide
  if (message != "") {
    // On crée un objet JS
    let message2 = message.replaceAll("<3", ":hart");
    let donnees = {};
    donnees["message"] = message2;

    // On convertit les données en JSON
    let donneesJson = JSON.stringify(donnees);

    // On envoie les données en POST en Ajax
    // On instancie XMLHttpRequest
    let xmlhttp = new XMLHttpRequest();

    // On gère la réponse
    xmlhttp.onreadystatechange = function () {
      // On vérifie si la requête est terminée
      if (this.readyState == 4) {
        // On vérifie qu'on reçoit un code 201
        if (this.status == 201) {
          // L'enregistrement a fonctionné
          // On efface le champ texte
          document.querySelector("#texte").value = "";
        } else {
          // L'enregistrement a échoué
          let reponse = JSON.parse(this.response);
          alert(reponse.message);
        }
      }
    };

    // On ouvre la requête
    xmlhttp.open("POST", "ajax/ajoutMessage.php");

    // On envoie la requête en incluant les données
    xmlhttp.send(donneesJson);
  }
}

//open form for upload
const avatarBtn = document.querySelectorAll(".btn-avatar");
const avatarBtn1 = document.querySelector("#btn-avatar");
const avatarForm = document.querySelector(".avatar-form");
const hello = document.querySelector(".hello");
const alert = document.getElementById("alert");
avatarBtn.forEach((item) => {
  item.addEventListener("click", toggleAvatar);
});
function toggleAvatar() {
  avatarForm.classList.toggle("avatar-form_visible");
}

//show password
const showPass = document.querySelector(".reveal-pass");
const inputPass = document.getElementById("pass");

showPass.addEventListener("click", showMyPass);

function showMyPass(e) {
  inputPass.type == "text"
    ? (inputPass.type = "password")
    : (inputPass.type = "text");
  console.log(e.target.src);
  e.target.src == "https://afps-dinan.ovh/membres/assets/eye-open.svg"
    ? (e.target.src = "https://afps-dinan.ovh/membres/assets/eye-closed.svg")
    : (e.target.src = "https://afps-dinan.ovh/membres/assets/eye-open.svg");
}

// bouton envoyer avatar
function ButtonClicked() {
  document.getElementById("formsubmitbutton").style.opacity = 0; // to undisplay
  document.getElementById("buttonreplacement").style.display = ""; // to display
  return true;
}
var FirstLoading = true;
function RestoreSubmitButton() {
  if (FirstLoading) {
    FirstLoading = false;
    return;
  }
  document.getElementById("formsubmitbutton").style.opacity = 1; // to display
  document.getElementById("buttonreplacement").style.display = "none"; // to undisplay
}
// To disable restoring submit button, disable or delete next line.
document.onfocus = RestoreSubmitButton;
