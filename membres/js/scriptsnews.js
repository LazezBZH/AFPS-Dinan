let infos = document.querySelector("#news");
let updateForm = document.querySelector("#update-form");

function chargeArticles() {
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
          infos.innerHTML += `<div class="one-news">
          <p class="article-date"> ${day} ${date} ${month} ${year} </p>
          <h3 class="article-title">${article.title} </h3>
          <p class="article-txt">${article.para} </p>`;
        }
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
chargeArticles();

function writeForm() {
  // On instancie XMLHttpRequest
  let xmlhttp = new XMLHttpRequest();

  // On gère la réponse
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        let articles = JSON.parse(this.response);

        let params = new URL(document.location).searchParams;
        let thisid = params.get("id").toString();

        let article = articles.filter((art) => art.id == thisid);

        // On ajoute le contenu *
        updateForm.innerHTML = `<form method="post">
        <div class="form-group">
            <label for="title">Titre :</label>
            <input value="${article[0].title}"  class="form-control input-title_update" type="text" id="title" name="title">
        </div>
        <div class="form-group">
            <label for="para">Contenu :</label>
            <textarea rows="10" class="form-control  input-para_update" id="para" name="para">${article[0].para}</textarea>
        </div>
        <button class="btn btn-art">Enregistrer</button>   
    </form>`;
      }
    }
  };

  // On ouvre la requête
  xmlhttp.open("GET", "ajax/chargeArticles.php");

  // On envoie
  xmlhttp.send();
}
writeForm();
