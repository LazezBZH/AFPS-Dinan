const nav = document.querySelector("nav");

window.addEventListener("scroll", fixeNav);
function fixeNav() {
  if (window.scrollY >= screen.height * 0.3) {
    console.log("coucu");
    nav.style.position = "fixed";
    nav.style.top = "0";
  } else {
    nav.style.position = "absolute";
    nav.style.top = "30dvh";
  }
}
