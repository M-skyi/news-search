$(document).ready(function () {
   $('.multiple-items').slick({
      variableWidth: true,
      arrows: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      mobileFirst: false,
      waitForAnimate: false,
      infinite: false,
      responsive: [{
            breakpoint: 1024,
            settings: {
               arrows: false,
               centerPadding: '20px',
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: false,
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: false,
            }
         },
         {
            breakpoint: 425,
            settings: {
               arrows: false,
               centerPadding: '0px',
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: false,
            }
         }

      ]

   });
});

let formSearch = document.querySelector(".form-search");

let formSearchInput = document.querySelector(".form-search__input-text");

let searchItem = document.querySelectorAll(".search__item");


const todaysDate = new Date();

// searchItem.forEach(el => {
//    el.firstChild.nextSibling.setAttribute("src",article.urlToImage)

// })

formSearch.addEventListener('submit', retrieve);

function retrieve(e) {

   e.preventDefault()

   let apiKey = "1bb2c66fe49f4cc8aae2c07724edd0bd";

   let topic = formSearchInput.value;

   let url = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${todaysDate}&sortBy=publishedAt&apiKey=${apiKey}`;

   fetch(url).then((res) => {
      return res.json()
   }).then((data) => {

      let news = data.articles;


      let urlNews = []
      news.forEach(el => {
         urlNews.push(el.url)
      })


      let searchItem = document.querySelectorAll(".search__item");
      for (let i = 0; i < searchItem.length; i++) {
         searchItem[i].setAttribute("href", urlNews[i])
         searchItem[i].setAttribute("target", "_blank")
      }


      news.forEach(item => {

         // adding a source name News API

         let div = document.createElement('div');
         div.textContent = item.source.name;
         div.classList.add("search__source-news");
         let searchSource = document.querySelector('.search__source-of-text');
         searchSource.replaceWith(div);




         // adding a photo News API

         let img = document.createElement('img');
         let newsImg = document.querySelector('.search__img');
         img.classList.add("search__img-news");
         img.setAttribute("src", item.urlToImage)
         newsImg.replaceWith(img);



         // adding a title News API

         let h2 = document.createElement('h2');
         h2.textContent = item.title;
         h2.classList.add("search__heading-news");
         let searchTitle = document.querySelector('.search__heading');
         searchTitle.replaceWith(h2);

         // adding a description News API

         let p = document.createElement('p');
         p.textContent = item.description;
         p.classList.add("search__discription-news");
         let searchDiscription = document.querySelector('.search__discription');
         searchDiscription.replaceWith(p);


      })



   })

}