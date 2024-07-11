const main = document.getElementById("root");

const artTitle = document.querySelector(".title_fullH2");
const fullArticle = document.getElementById("full-article");

let thisH2 = "";
let tag = query("article");

fetch("/blog/data.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function (json) {
    let list = new MyArticles();
    for (let i = 0; i < json.articles.length; i++) {
      let art = new Article(json.articles[i]);
      list.add(art);
    }

    let listToDisplay = "";

    function displayList() {
      if (tag) {
        listToDisplay = list.all.filter((art) => art.id == tag);
        if (listToDisplay.length === 0) {
          listToDisplay = [];
          artTitle.innerHTML += `<h2 class="error">Une petite erreur s'est produite. </h2>`;
        } else {
          thisH2 = listToDisplay[0].artDate;
          artTitle.innerHTML += `<h2> lettre du &nbsp; <span class="tag">${thisH2}</span></h2>`;
        }
        list.displayOneArticle(listToDisplay[0]);
      } else {
        artTitle.innerHTML = `<h2>Erreur</h2>`;
      }
    }
    displayList();
    console.log(tag);
    let num = tag;
    const left = document.querySelector(".left-blog");
    const right = document.querySelector(".right-blog");
    left.addEventListener("click", goPrevious);
    right.addEventListener("click", goNext);
    if (num < 36) {
      left.style.display = "none";
    } else {
      left.style.display = "initial";
    }
    console.log("lenght", json.articles.length);
    if (num > json.articles.length + 33) {
      right.style.display = "none";
    } else {
      right.style.display = "initial";
    }

    function goPrevious() {
      num--;
      console.log("prev", num);
      window.location.href = "/blog/article.html?article=" + num;
    }
    function goNext() {
      num++;
      console.log("next", num);
      window.location.href = "/blog/article.html?article=" + num;
    }
  });
