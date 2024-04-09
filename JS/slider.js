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
  '<span  class="link1"><a href="#soon">Réunion publique vendredi 19 avril 2024, la Source, 20h</a></span>',
  '<span  class="link1"><a href="#soon">Réunion publique vendredi 19 avril 2024, la Source, 20h</a></span>',
  '<span  class="link2"><a href="#agenda">Rassemblement hebdomadaire vendredi 18h à Dinan (angle rue Thiers / place Duclos)</a></span>',
  '<span  class="link2"><a href="#agenda">Rassemblement hebdomadaire vendredi 18h à Dinan (angle rue Thiers / place Duclos)</a></span>',
  '<span  class="link3"><a href="#agenda">Réunion mensuelle salle maison des associations la Source, Mer 10/05/24 19h15</a></span>',
  '<span  class="link3"><a href="#agenda">Réunion mensuelle salle maison des associations la Source, Mer 10/05/24 19h15</a></span>',
  '<span  class="link5"><span class="attention attention1">URGENCE: </span><a href="#cagnotte"> Aidons la famille de Ibrahim</a></span>',
  '<span  class="link6"><span class="attention attention2">URGENCE: </span> <a href="#cagnotte">Aidons la famille de Ibrahim</a></span>',
];

let count2 = 0;
setInterval(function () {
  count2++;
  if (count2 > briefLinks.length - 1) {
    count2 = 0;
  }
  document.getElementById("brief-links").innerHTML = briefLinks[count2];
}, 1500);

// Ibrahim
let count3 = 1;
setInterval(function () {
  document.getElementById("ibrahim" + count3).checked = true;
  count3++;
  if (count3 > 6) {
    count3 = 1;
  }
}, 1300);
