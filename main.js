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
const fromDate = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000));

formSearch.addEventListener('submit', retrieve);

function retrieve(e) {

   e.preventDefault()

   let apiKey = "1bb2c66fe49f4cc8aae2c07724edd0bd";

   let topic = formSearchInput.value;

   let url = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${fromDate}&to=${todaysDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   fetch(url).then((res) => {
      return res.json()
   }).then((data) => {

      localStorage.setItem('url', JSON.stringify(data));

      let search = document.querySelector(".search");

      if (topic.length === 0) {
         alert("«Нужно ввести ключевое слово»");
         return
      }

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
      function getUrlImg() {

         let newsImg = document.querySelectorAll('.search__img');
         for (let i = 0; i < newsImg.length; i++) {
            newsImg[i].setAttribute("src", imgNews[i])
         }

      }
      getUrlImg()


      // adding a url News API
      function getUrl() {

         let searchItem = document.querySelectorAll(".search__item");
         for (let i = 0; i < searchItem.length; i++) {
            searchItem[i].setAttribute("href", urlNews[i])
            searchItem[i].setAttribute("target", "_blank")
         }

      }

      getUrl()


      // adding a title News API

      function getTitle() {

         let searchTitle = document.querySelectorAll('.search__heading');
         for (let i = 0; i < searchTitle.length; i++) {
            searchTitle[i].textContent = titleNews[i];
         }

      }

      getTitle() 

      // adding a description News API

      function getDescription() {

         let searchDiscription = document.querySelectorAll('.search__discription');
      for (let i = 0; i < searchDiscription.length; i++) {
         searchDiscription[i].textContent = descriptionNews[i];
         }

      }
      getDescription()
      
      // adding a source name News API
      function getSourse() {

         let searchSource = document.querySelectorAll('.search__source-of-text');
         for (let i = 0; i < searchSource.length; i++) {
            searchSource[i].textContent = sourseNameNews[i];
          }

      }
      getSourse()
     

      // show more News

      let btnMoreNews = document.querySelector(".search__button");
      btnMoreNews.addEventListener("click", moreNews)


      function moreNews() {

         let searchItems = document.querySelector(".search-items");
         for (let i = 0; i <= 2; i++) {

            let moreNewsItem = document.createElement("a");
            moreNewsItem.className = "search__item";
            searchItems.append(moreNewsItem)
         }


         let searchItem = document.querySelectorAll(".search__item");
         for (let i = 0; i < searchItem.length; i++) {

            let img = document.createElement('img')

            img.className = "search__img"

            if (searchItem[i].firstChild === null) {

               searchItem[i].prepend(img)

            }

         }

         getUrlImg()
         getUrl()





      }







   })



}