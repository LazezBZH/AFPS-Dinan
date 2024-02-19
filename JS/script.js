const nav = document.querySelector("nav");

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
