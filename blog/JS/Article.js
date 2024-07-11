// constructeur d'un article

class Article {
  constructor(Articles) {
    this.title = Articles.title;
    this.artDate = Articles.artDate;
    this.id = Articles.id;
    this.paras = Articles.paras;
    this.tag = Articles.tagArr[0];
    this.tagArr = Articles.tagArr;
  }
  render() {
    let parasHtml = "";

    for (let i = 0; i < this.paras.length; i++) {
      let para = this.paras[i];

      parasHtml += `<span>${para}</span><br>`;
    }
    return `
   <div class="blogArticle" id=${this.id}>
                <div class="article-header">
                    <h3>${this.title}</h3>
                    <p class="date">${this.artDate}</p> 
                  
                     <a class="showMore" href="/blog/article.html?article=${this.id}"}>Lire&#xA0;plus</a>
          
                </div>                  
                <p class="paras">${parasHtml}</p>
   </div>
    </div>`;
  }

  renderOne() {
    let parasHtml = "";

    for (let i = 0; i < this.paras.length; i++) {
      let para = this.paras[i];

      parasHtml += `<span>${para}</span><br>`;
    }
    return `
   <div class="blogArticle">
  
                <div class="article-header_full">
                    <h3>${this.title} <img class="float" src="/assets/images/livres/01.webp" alt=""></h3>         
                </div>
                 
                <p class="paras_full">${parasHtml}</p>
   </div>
    </div>`;
  }
}
