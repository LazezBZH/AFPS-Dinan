let articlelist = document.querySelector("#all-articles");

function chargeTitles() {
  // On instancie XMLHttpRequest
  let xmlhttp = new XMLHttpRequest();

  // On gère la réponse
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        // On a une réponse
        // On convertit la réponse en objet JS
        let articles = JSON.parse(this.response);
        articles = articles.sort(function (a, b) {
          if (parseInt(a.id) < parseInt(b.id)) {
            return 1;
          }
          if (parseInt(a.id) > parseInt(b.id)) {
            return -1;
          }
          return 0;
        });
        for (let article of articles) {
          // On transforme la date du message en JS
          let dateArticle = new Date(article.created_at);
          let day = dateArticle.getDay();
          let date = dateArticle.getDate();
          let month = dateArticle.getMonth();
          let year = dateArticle.getFullYear();
          switch (day) {
            case 1:
              day = "Lundi";
              break;
            case 2:
              day = "Mardi";
              break;
            case 3:
              day = "Mercredi";
              break;
            case 4:
              day = "Jeudi";
              break;
            case 5:
              day = "Vendredi";
              break;
            case 6:
              day = "Samedi";
              break;
            default:
              day = "Dimanche";
          }
          switch (month) {
            case 1:
              month = "Février";
              break;
            case 2:
              month = "Mars";
              break;
            case 3:
              month = "Avril";
              break;
            case 4:
              month = "Mai";
              break;
            case 5:
              month = "Juin";
              break;
            case 6:
              month = "Juillet";
              break;
            case 7:
              month = "Août";
              break;
            case 8:
              month = "Septembre";
              break;
            case 9:
              month = "Octobre";
              break;
            case 10:
              month = "Novembre";
              break;
            case 11:
              month = "Décembre";
              break;
            default:
              month = "Janvier";
          }

          // On ajoute le contenu *
          articlelist.innerHTML += `<div class="one-news_edit">
          <p class="article-date_edit"> ${day} ${date} ${month} ${year} </p>
          <h3 class="article-title_edit">${article.title} </h3>
          <p class="article-txt_edit">${article.para} </p>
          <div class="btn-container_edit">
          <a  href="updatethisarticle.php?id=${article.id}" class="btn btn-insc btn-update">Modifier</a>
          <button class="btn btn-insc btn-del_art">Supprimer</button>
          
           <div class="conf-del">
           <p class="del-avert"> Attention cette action est irréversible, êtes-vous sûr·e de vouloir supprimer?</p>
          <div>
          <a class="btn btn-insc conf-del_ art" href="deletethisarticle.php?id=${article.id}">Oui</a>
          <a class="btn btn-insc conf-del_ art" href="managearticle.php">Non</a>
          </div>
          </div>
          </div>`;
        }
        const delBtn = document.querySelectorAll(".btn-del_art");

        delBtn.forEach((btn) => {
          btn.addEventListener("click", () => {
            btn.classList.toggle("conf-shown");
            console.log("coucocu");
          });
        });
      } else {
        // On gère les erreurs
        let erreur = JSON.parse(this.response);
        alert(erreur.message);
      }
    }
  };

  // On ouvre la requête
  xmlhttp.open("GET", "ajax/chargeArticles.php");

  // On envoie
  xmlhttp.send();
}
chargeTitles();
