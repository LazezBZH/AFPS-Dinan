let count = 1;
setInterval(function () {
  document.getElementById("page" + count).checked = true;
  count++;
  if (count > 8) {
    count = 1;
  }
}, 2500);
