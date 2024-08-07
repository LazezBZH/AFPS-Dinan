// pour que le lien actif de la nav prenne la classe active au scroll
const links = document.querySelectorAll(".links");
const up = document.querySelector(".up");
up.addEventListener("click", goUp);
function goUp() {
  window.scroll({
    top: 0,
    left: 100,
    behavior: "smooth",
  });
}
const toggle = (e) => {
  links.forEach((link) => {
    link.classList.remove("active");
  });
  const element = e.target;
  element.classList.add("active");
};

links.forEach((link) => {
  link.addEventListener("click", toggle);
});

const init = () => {
  const firstLink = links[0];
  firstLink.classList.add("active");
};

init();

const ratio = 0.2;

const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const toggleLinks1 = function (entries) {
  const link1 = document.querySelector("#link-1");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link1.classList.add("active");
      up.style.display = "none";
      // window.location.href = "/#accueil";
    }
  });
};
const toggleLinks2 = function (entries) {
  const link2 = document.querySelector("#link-2");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link2.classList.add("active");
      up.style.display = "block";

      // window.location.href = "/#agenda";
    }
  });
};
const toggleLinks3 = function (entries) {
  const link3 = document.querySelector("#link-3");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link3.classList.add("active");
      up.style.display = "block";
      // window.location.href = "/#comprendre";
    }
  });
};
const toggleLinks4 = function (entries) {
  const link4 = document.querySelector("#link-4");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link4.classList.add("active");
      up.style.display = "block";
      // window.location.href = "/#liens";
    }
  });
};
const toggleLinks5 = function (entries) {
  const link5 = document.querySelector("#link-5");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link5.classList.add("active");
      up.style.display = "block";
      // window.location.href = "/#contact";
    }
  });
};
const toggleLinks6 = function (entries) {
  const link6 = document.querySelector("#link-6");

  entries.forEach((entry) => {
    if (entry.intersectionRatio > ratio) {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link6.classList.add("active");
      up.style.display = "block";
      // window.location.href = "/#contact";
    }
  });
};

const observer1 = new IntersectionObserver(toggleLinks1, options);
const observer2 = new IntersectionObserver(toggleLinks2, options);
const observer3 = new IntersectionObserver(toggleLinks3, options);
const observer4 = new IntersectionObserver(toggleLinks4, options);
const observer5 = new IntersectionObserver(toggleLinks5, options);
const observer6 = new IntersectionObserver(toggleLinks6, options);

if (!query("id")) {
  let target1 = document.querySelector(".heading-1");
  observer1.observe(target1);
  let target2 = document.querySelector(".heading-2");
  observer2.observe(target2);
  let target3 = document.querySelector(".heading-3");
  observer3.observe(target3);
  let target4 = document.querySelector(".heading-4");
  observer4.observe(target4);
  let target5 = document.querySelector(".heading-5");
  observer5.observe(target5);
  let target6 = document.querySelector(".heading-6");
  observer6.observe(target6);
}
