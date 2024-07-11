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

    // listToDisplay = list.all;
    // if (!sessionStorage.getItem("order")) {
    //   sessionStorage.setItem("order", "new");
    // }
    // if (!sessionStorage.getItem("month")) {
    //   sessionStorage.setItem("month", "tous");
    // }
    function initBlog() {
      console.log("init");
      // if (!sessionStorage.getItem("order")) {
      //   sessionStorage.setItem("order", "new");
      // }
      // if (!sessionStorage.getItem("month")) {
      //   sessionStorage.setItem("month", "tous");
      // }
      let order = sessionStorage.getItem("order");
      const order1 = document.querySelector(".order1");
      const order2 = document.querySelector(".order2");
      if (order == "new") {
        order2.style.display = "none";
        order1.style.display = "initial";
      } else {
        order2.style.display = "initial";
        order1.style.display = "none";
      }
      // list.listenForFilteringOnload();
      // list.listenForReorderingOnload();
      list.build(list.all);
    }
    initBlog();
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
  });
