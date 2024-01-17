// nav burger en responsive

let sidenav = document.getElementById("mySidenav");
let openBtn = document.querySelector(".openBtn");
let closeBtn = document.getElementById("closeBtn");

document.addEventListener("mouseup", closeOnClicOut);
openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
sidenav.addEventListener("click", closeNav);

function openNav() {
  sidenav.classList.add("visible");
  openBtn.classList.add("visible");
}

function closeNav() {
  sidenav.classList.remove("visible");
  openBtn.classList.remove("visible");
}
function closeOnClicOut(e) {
  if (!sidenav.contains(e.target)) {
    closeNav();
  }
}
