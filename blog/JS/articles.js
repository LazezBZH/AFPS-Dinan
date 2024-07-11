const main = document.getElementById("root");
const select = document.querySelector("select");
const artTitle = document.querySelector(".title");

let thisH2 = "";
fetch("/blog/data.json")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function (json) {
    let list = new MyArticles();
    for (let i = 0; i < json.articles.length; i++) {
      let art = new Article(json.articles[i]);
      list.add(art);
    }

    if (!sessionStorage.getItem("month")) {
      sessionStorage.setItem("month", "tous");
    }
    if (!sessionStorage.getItem("order")) {
      sessionStorage.setItem("order", "new");
    }

    let order = "";
    let tag = "";
    order = sessionStorage.getItem("order");
    tag = sessionStorage.getItem("month");

    const order1 = document.querySelector(".order1");
    const order2 = document.querySelector(".order2");

    if (order == "new") {
      order2.style.display = "none";
      order1.style.display = "initial";
    } else {
      order1.style.display = "none";
      order2.style.display = "initial";
    }

    list.build(list.all);
    list.listenForFilteringAndReordering(order, tag);

    let options = [];
    for (let i = 0; i < json.articles.length; i++) {
      let onetag = json.articles[i].tagArr[1];

      options.push(onetag);
    }
    let setOptions = [...new Set(options)];

    for (let i = 0; i < setOptions.length; i++) {
      let optionHtml = "";
      let option = setOptions[i];
      let optionValue = setOptions[i].replace(/ /g, "").toLowerCase();
      optionHtml += `<option value=${optionValue}>${option} `;
      select.innerHTML += optionHtml;
    }
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === tag) {
        select.selectedIndex = i;
        break;
      }
    }
  });
