let id = "";
let article = "";
const articles = document.querySelector(".articles");
const root = document.querySelector("#root");
if (query("id")) {
  id = query("id");
  id = "article" + id;
  stopLoaderArt();
  article = document.getElementById(id);
  let articleHtml = article.innerHTML;
  console.log(article);
  root.innerHTML =
    `<article class="article">` +
    articleHtml +
    `<button class="close-article">X</button></article>`;
  articles.style.display = "block";
}

function stopLoaderArt() {
  setTimeout(() => {
    console.log("loaded", loaded);
    loaded = true;
    loader.style.display = "none";
    container.style.display = "block";
    sessionStorage.setItem("loadedAfps15", loaded);
  }, 300);
}

console.log(id);

const closeArticle = document.querySelector(".close-article");
const articlesLinks = document.querySelectorAll("#root a");
const idback = document.querySelector("#root .idback");
let idb = "";
if (closeArticle) {
  if (idback) {
    idb = idback.id;
    console.log("idback", idb);
  } else if (!idback) {
    idb = id;
    console.log("idback", idb);
  }

  closeArticle.addEventListener("click", closeThisArticle);
  articlesLinks.forEach((link) =>
    link.addEventListener("click", closeThisArticle)
  );
}
function closeThisArticle() {
  if (window.history.length > 1) {
    window.location.href = "/#" + id;
  } else {
    window.location.href = "/";
  }
}
// function closeThisArticle() {
//   window.location.href = "/";
// }
