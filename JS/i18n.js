const loader = document.querySelector(".loader");
let container = document.querySelector(".container");

window.addEventListener("load", initLoad);

let loaded = sessionStorage.getItem("loadedAfps15") || false;

if (loaded) {
  loader.style.display = "none";
  container.style.display = "block";
} else if (!loaded) {
  loader.style.display = "block";
  container.style.display = "none";
}
function initLoad() {
  if (!loaded) {
    stopLoader();
  }
}

function stopLoader() {
  setTimeout(() => {
    loaded = true;
    loader.style.display = "none";
    container.style.display = "block";
    sessionStorage.setItem("loadedAfps15", loaded);
  }, 2500);
}

// compteur jours
// const countDays = document.querySelector(".counter");
// let today = new Date();
// let thisDay = today.getDay();
// let thisDate = today.getDate();
// let thisMonth = today.getMonth();
// let thisYear = today.getFullYear();

// let firstday = new Date(2023, 9, 7);

// let intervalle = today.getTime() - firstday.getTime();
// intervalle = Math.floor(intervalle / (1000 * 60 * 60 * 24)) + 1;

// switch (thisDay) {
//   case 1:
//     thisDay = "lundi";
//     break;
//   case 2:
//     thisDay = "mardi";
//     break;
//   case 3:
//     thisDay = "mercredi";
//     break;
//   case 4:
//     thisDay = "jeudi";
//     break;
//   case 5:
//     thisDay = "vendredi";
//     break;
//   case 6:
//     thisDay = "samedi";
//     break;
//   default:
//     thisDay = "dimanche";
// }

// switch (thisMonth) {
//   case 0:
//     thisMonth = "janvier";
//     break;
//   case 1:
//     thisMonth = "février";
//     break;
//   case 2:
//     thisMonth = "mars";
//     break;
//   case 3:
//     thisMonth = "avril";
//     break;
//   case 4:
//     thisMonth = "mai";
//     break;
//   case 5:
//     thisMonth = "juin";
//     break;
//   case 6:
//     thisMonth = "juillet";
//     break;

//   case 7:
//     thisMonth = "août";
//     break;
//   case 8:
//     thisMonth = "septembre";
//     break;
//   case 9:
//     thisMonth = "octobre";
//     break;
//   case 10:
//     thisMonth = "décembre";
//     break;
//   default:
//     thisDay = "novembre";
// }

// countDays.innerHTML = `Aujourd'hui ${thisDay} ${thisDate}  ${thisMonth} ${thisYear} : &nbsp;<span class="red white-bg"> ${intervalle} </span> <sup>ème</sup>&nbsp; jour du conflit israëlo-palestinien`;
