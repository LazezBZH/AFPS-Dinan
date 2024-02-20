const nav = document.querySelector("nav");
const plusBtn = document.querySelectorAll(".plus-btn");

if (query("id")) {
  nav.style.position = "fixed";
  nav.style.top = "0";
} else {
  nav.style.position = "absolute";
  nav.style.top = "30dvh";
}
window.addEventListener("scroll", fixeNav);
function fixeNav() {
  if (!query("id") && window.scrollY >= screen.height * 0.3) {
    nav.style.position = "fixed";
    nav.style.top = "0";
  } else if (!query("id") && window.scrollY < screen.height * 0.3) {
    nav.style.position = "absolute";
    nav.style.top = "30dvh";
  } else {
    nav.style.position = "fixed";
    nav.style.top = "0";
  }
}

plusBtn.forEach((item) => {
  item.addEventListener("click", openArticle);
});
function openArticle(e) {
  let target = e.target.value;
  window.location.href = "/?id=" + target;
}
