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
  '<span  class="link1"><a href="#soon">Réunion publique vendredi 19 avril 2024</a></span>',
  '<span  class="link2"><a href="#agenda">Rassemblement hebdomadaire place Duclos à Dinan (à l\'angle de la rue Thiers)</a></span>',
  '<span  class="link3"><a href="#agenda">Réunion mensuelle salle maison des associations la Source</a></span>',
  '<span  class="link4"><a href="#audience">Audience de la famille Awad jeudi 2 mai 2024 <i>(mise à jour)</i></a></span>',
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
  document.getElementById("ibrahim" + count2).checked = true;
  count3++;
  if (count3 > 6) {
    count3 = 1;
  }
}, 2500);
