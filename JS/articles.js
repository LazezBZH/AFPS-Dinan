let id = "";
let article = "";
const articles = document.querySelector(".articles");
const root = document.querySelector("#root");
if (query("id")) {
  id = query("id");
  id = "article" + id;

  article = document.getElementById(id);
  let articleHtml = article.innerHTML;
  console.log(article);
  root.innerHTML =
    `<article class="article">` +
    articleHtml +
    `<button class="close-article">X</button></article>`;
  articles.style.display = "block";
}

console.log(id);

const closeArticle = document.querySelector(".close-article");
closeArticle.addEventListener("click", closeThisArticle);
function closeThisArticle() {
  window.location.href = "/";
}
