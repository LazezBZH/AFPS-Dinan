const upBlog = document.querySelector(".up-blog");

document.addEventListener("scroll", revealScroll);

function revealScroll() {
  if (window.pageYOffset > 600) {
    upBlog.style.display = "initial";
  } else {
    upBlog.style.display = "none";
  }
}
upBlog.addEventListener("click", goUp);
function goUp() {
  window.scroll({
    top: 0,
    left: 100,
    behavior: "smooth",
  });
}
