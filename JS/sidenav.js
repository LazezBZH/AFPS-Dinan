// nav burger en responsive

let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

document.addEventListener("mouseup", closeOnClicOut);
openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
sidenav.addEventListener("click", closeNav);

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}
function closeOnClicOut(e) {
  if (!sidenav.contains(e.target)) {
    closeNav();
  }
}
