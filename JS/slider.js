let count = 1;
setInterval(function () {
  document.getElementById("page" + count).checked = true;
  count++;
  if (count > 8) {
    count = 1;
  }
}, 4500);

let count2 = 1;
setInterval(function () {
  document.getElementById("actu" + count).checked = true;
  count2++;
  if (count > 5) {
    count = 1;
  }
}, 1000);
