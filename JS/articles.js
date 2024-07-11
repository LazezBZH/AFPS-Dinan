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

  root.innerHTML =
    `<article class="article">` +
    articleHtml +
    `<button class="close-article">X</button></article>`;
  articles.style.display = "block";
}

function stopLoaderArt() {
  setTimeout(() => {
    loaded = true;
    loader.style.display = "none";
    container.style.display = "block";
    sessionStorage.setItem("loadedAfps15", loaded);
  }, 300);
}

const closeArticle = document.querySelector(".close-article");
const articlesLinks = document.querySelectorAll("#root a");
const idback = document.querySelector("#root .idback");
let idb = "";
if (closeArticle) {
  if (idback) {
    idb = idback.id;
  } else if (!idback) {
    idb = id;
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
