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

const todaysDate = new Date();


formSearch.addEventListener('submit', retrieve);

function retrieve(e) {

   e.preventDefault()

   let apiKey = "1bb2c66fe49f4cc8aae2c07724edd0bd";

   let topic = formSearchInput.value;

   let url = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${todaysDate}&sortBy=publishedAt&apiKey=${apiKey}`;

   fetch(url).then((res) => {
      return res.json()
   }).then((data) => {

      let search = document.querySelector(".search");

      if (search.classList.contains("search")) {
         search.classList.add("search__active")
      } else {
         console.log("error")
      }

      let news = data.articles;

      let urlNews = [];
      let imgNews = [];
      let titleNews = [];
      let descriptionNews = [];
      let sourseNameNews = [];

      news.forEach(el => {
         urlNews.push(el.url);
         imgNews.push(el.urlToImage);
         titleNews.push(el.title);
         descriptionNews.push(el.description);
         sourseNameNews.push(el.source.name);
      })

      // adding a photo News API

      let newsImg = document.querySelectorAll('.search__img');
      for (let i = 0; i < newsImg.length; i++) {
         newsImg[i].setAttribute("src", imgNews[i])
      }

      // adding a url News API

      let searchItem = document.querySelectorAll(".search__item");
      for (let i = 0; i < searchItem.length; i++) {
         searchItem[i].setAttribute("href", urlNews[i])
         searchItem[i].setAttribute("target", "_blank")
      }

      // adding a title News API

      let searchTitle = document.querySelectorAll('.search__heading');
      for (let i = 0; i < searchTitle.length; i++) {
         searchTitle[i].textContent = titleNews[i];
      }

      // adding a description News API

      let searchDiscription = document.querySelectorAll('.search__discription');
      for (let i = 0; i < searchDiscription.length; i++) {
         searchDiscription[i].textContent = descriptionNews[i];

      }

      // adding a source name News API

      let searchSource = document.querySelectorAll('.search__source-of-text');
      for (let i = 0; i < searchSource.length; i++) {
         searchSource[i].textContent = sourseNameNews[i];

      }



      let btnMoreNews = document.querySelector(".search__button");
      btnMoreNews.addEventListener("click", function moreNews() {
   
      let img = document.createElement("img");
      img.className = "search__img"
      document.body.appendChild(img)
      console.log(img)

      })

      




   })

   

}

