let count = 1;
setInterval(function () {
  document.getElementById("page" + count).checked = true;
  count++;
  if (count > 8) {
    count = 1;
  }
}, 4500);

// texte accueil en bref

let briefLinks = [
  '<a href="#collecte">Collecte de l&#x2019;UJFP: Urgence guerre à Gaza</a>',
  '<a href="#collecte">Collecte de l&#x2019;UJFP: Urgence guerre à Gaza</a>',
  '<a href="#agenda">Rassemblement hebdomadaire vendredi 18h à Dinan (angle rue Thiers / place Duclos)</a>',
  '<a href="#agenda">Rassemblement hebdomadaire vendredi 18h à Dinan (angle rue Thiers / place Duclos)</a>',
  `<span class="attention attention2"> Pas de veillées hebdomadaires les vendredis entre le 14 juillet et le 15 août</span>`,
  `<span class="attention attention2"> Pas de veillées hebdomadaires les vendredis entre le 14 juillet et le 15 août</span>`,
  '<span class="attention attention1">Juillet et août pas de réunions mensuelles</span>',
  '<a href="#agenda">Prochaine réunion mensuelle Mercredi 11 septembre 2024, 19h00, la Source</a>',
  '<a href="#agenda">Prochaine réunion mensuelle Mercredi 11 septembre 2024, 19h00, la Source</a>',
  '<span class="attention attention1">URGENCE: </span><a href="#cagnotte"> Aidons la famille de Ibrahim</a>',
  '<span class="attention attention2">URGENCE: </span> <a href="#cagnotte">Aidons la famille de Ibrahim</a>',
];

let count2 = 0;
setInterval(function () {
  document.getElementById("brief-links").innerHTML = briefLinks[count2];
  count2++;
  if (count2 > briefLinks.length - 1) {
    count2 = 0;
  }
}, 1700);

// Ibrahim
let ibrahimSrc = [
  `<img src="./assets/images/ibrahim1.webp" alt="exposé de ibrahim"></img>`,
  `<img src="./assets/images/ibrahim2.webp" alt="exposé de ibrahim"></img>`,
  `<img src="./assets/images/ibrahim3.webp" alt="exposé de ibrahim"></img>`,
  `<img src="./assets/images/ibrahim4.webp" alt="exposé de ibrahim"></img>`,
  `<img src="./assets/images/ibrahim5.webp" alt="exposé de ibrahim"></img>`,
  `<img src="./assets/images/ibrahim6.webp" alt="exposé de ibrahim"></img>`,
];
let img2 = document.querySelector(" .hibrahimSlider ");
let count3 = 0;
setInterval(function () {
  img2.style.opacity = 0;
  img2.innerHTML = ibrahimSrc[count3];
  img2.animate(
    {
      opacity: [0, 1],
    },
    {
      fill: "both",
      duration: 1000,
    }
  );
  count3++;
  if (count3 > 5) {
    count3 = 0;
  }
}, 2000);

// réunion publique

let reunionSrc = [
  `<img src="./assets/images/reunion1/reunion11.webp" alt="photo de la réunion publique"></img>`,
  `<img src="./assets/images/reunion1/reunion12.webp" alt="photo de la réunion publique"></img>`,
  `<img src="./assets/images/reunion1/reunion13.webp" alt="photo de la réunion publique"></img>`,
  `<img src="./assets/images/reunion1/reunion14.webp" alt="photo de la réunion publique"></img>`,
  `<img src="./assets/images/reunion1/reunion15.webp" alt="photo de la réunion publique"></img>`,
  `<img src="./assets/images/reunion1/reunion16.webp" alt="photo de la réunion publique"></img>`,
  `<img src="./assets/images/reunion1/reunion17.webp" alt="photo de la réunion publique"></img>`,
  `<img src="./assets/images/reunion1/reunion18.webp" alt="photo de la réunion publique"></img>`,
];
let img1 = document.querySelector(" .sliderReunion1 ");
let count4 = 0;
setInterval(function () {
  img1.style.opacity = 0;
  img1.innerHTML = reunionSrc[count4];
  img1.animate(
    {
      opacity: [0, 1],
    },
    {
      fill: "both",
      duration: 800,
    }
  );

  count4++;
  if (count4 > 7) {
    count4 = 0;
  }
}, 2100);

// projecteur
let projecteurSrc = [
  `<img src="./assets/images/projecteur/flyer1.webp" alt="flyer coup de projecteur page 1"></img>`,
  `<img src="./assets/images/projecteur/flyer2.webp" alt="flyer coup de projecteur page 2"></img>`,
  `<img src="./assets/images/projecteur/film1.webp" alt="affiche premier film"></img>`,
  `<img src="./assets/images/projecteur/film2.webp" alt="affiche second film"></img>`,
  `<img src="./assets/images/projecteur/film3.webp" alt="affiche troisième film"></img>`,
  `<img src="./assets/images/projecteur/film4.webp" alt="affiche quatrième film"></img>`,
];
let imgProj = document.querySelector(" .sliderProjecteur");
let count5 = 0;
setInterval(function () {
  imgProj.style.opacity = 0;
  imgProj.innerHTML = projecteurSrc[count5];
  imgProj.animate(
    {
      opacity: [0, 1],
    },
    {
      fill: "both",
      duration: 1100,
    }
  );

  count5++;
  if (count5 > 5) {
    count5 = 0;
  }
}, 2200);
