class MyArticles {
  constructor() {
    this.all = [];
    this.listToDisplay = [];
  }
  add(art) {
    this.all.push(art);
  }
  build() {
    this.displayArticles(this.listToDisplay);

    this.listenOnload();
    this.listenForFiltering();
    this.listenForReordering();
  }
  displayArticles(arts) {
    let html = "";

    for (let i = 0; i < arts.length; i++) {
      let art = new Article(arts[i]);
      html += art.render();
    }
    main.innerHTML = html;
  }
  // filter
  listenOnload() {
    let order = sessionStorage.getItem("order") || "new";
    let tag = sessionStorage.getItem("month") || "tous";
    // sessionStorage.setItem("order", order);
    // sessionStorage.setItem("order", order);
    // let ToDisplaythis = [];
    console.log("onload");
    // this.listToDisplay = this.all.filter((art) => art.tagArr.includes(tag));

    window.addEventListener("load", () => {
      // order = sessionStorage.getItem("order");
      // tag = sessionStorage.getItem("month");
      // this.listToDisplay = this.all.filter((art) => art.tagArr.includes(tag));
      this.order = order;
      this.tag = tag;
      this.reorder(order, tag);
      this.filter(tag);
    });
  }
  listenForFiltering() {
    const select = document.querySelector("select");

    let tag = "";

    select.addEventListener("change", (e) => {
      tag = e.target.value;
      sessionStorage.setItem("month", tag);
      this.tag = tag;
      this.filter(this.tag);
    });
  }

  filter(tag) {
    const artTitle = document.querySelector(".title");
    let number = "";
    console.log("61", tag);

    if (tag && tag != "tous") {
      // this.listToDisplay = this.all.filter((art) => art.tagArr.includes(tag));
      console.log(this.listToDisplay);
      number = this.listToDisplay.length;
      artTitle.innerHTML = `<h2>Tous les <span class="red">${number}</span> articles filter66</h2>`;
      if (number === 0) {
        this.listToDisplay = [];
        artTitle.innerHTML = `<h2 class="error">Une petite erreur s'est produite. Vous pouvez effectuer une autre sélection ou visualiser l'ensemble des oeuvres grâce aux boutons ci-dessus. filter69</h2>`;
      } else {
        // this.listToDisplay = this.all;
        console.log("vvv", tag);
        this.listToDisplay = this.all.filter((art) => art.tagArr.includes(tag));
        console.log(this.listToDisplay);
        thisH2 = this.listToDisplay[0].tagArr[1];
        artTitle.innerHTML = `<h2>les <span class="red">${number}</span> articles de <span class="tag">${thisH2}</span>filter73</h2>`;
      }
    } else {
      this.listToDisplay = this.all;
      console.log("78", this.listToDisplay);
      number = this.listToDisplay.length;

      artTitle.innerHTML = `<h2>Tous les <span class="red">${number}</span> articles filter79</h2>`;
    }

    this.build(this.listToDisplay);
  }
  // filter

  listenForReordering() {
    let orders = document.getElementsByClassName("order");
    let month = sessionStorage.getItem("month");
    for (let el of orders) {
      el.addEventListener("click", (e) => {
        let order = e.target.getAttribute("data-order");
        for (let elt of orders) {
          elt.style.display = "initial";
        }
        e.target.style.display = "none";
        this.order = order;
        this.month = month;
        this.reorder(order, month);
      });
    }
  }
  reorder(order, month) {
    const artTitle = document.querySelector(".title");
    let methodName = "reorderBy" + ucfirst(order);
    let chosenMonth = month;
    let number = "";
    if (chosenMonth && chosenMonth != "tous") {
      this.listToDisplay = this.all.filter((art) =>
        art.tagArr.includes(chosenMonth)
      );
      number = this.listToDisplay.length;
      thisH2 = this.listToDisplay[0].tagArr[1];
      artTitle.innerHTML = `<h2>les <span class="red">${number}</span> articles de <span class="tag">${thisH2}</span>reorder121</h2>`;
    } else {
      this.listToDisplay = this.all;
      number = this.listToDisplay.length;
      artTitle.innerHTML = `<h2>Tous les <span class="red">${number}</span> articles reorder125</h2>`;
    }
    this[methodName]();

    // if (chosenMonth && chosenMonth != "tous") {
    //   this.listToDisplay = this.all.filter((art) =>
    //     art.tagArr.includes(chosenMonth)
    //   );
    //   number = this.listToDisplay.length;
    //   thisH2 = this.listToDisplay[0].tagArr[1];
    //   artTitle.innerHTML = `<h2>les <span class="red">${number}</span> articles de <span class="tag">${thisH2}</span>reorder121</h2>`;
    // } else {
    //   this.listToDisplay = this.all;
    //   number = this.listToDisplay.length;
    //   artTitle.innerHTML = `<h2>Tous les <span class="red">${number}</span> articles reorder125</h2>`;
    // }
    this.build(this.listToDisplay);
  }
  reorderByNew() {
    this.listToDisplay = this.listToDisplay.sort((a, b) => {
      sessionStorage.setItem("order", "new");
      return b.id - a.id;
    });
  }
  reorderByOld() {
    this.listToDisplay = this.listToDisplay.sort((a, b) => {
      sessionStorage.setItem("order", "old");
      return a.id - b.id;
    });
  }
  displayOneArticle(article) {
    let htmlOne = "";

    let art = new Article(article);
    htmlOne += art.renderOne();

    main.innerHTML = htmlOne;
  }
}
