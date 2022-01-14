
import {getApiNews,getApiGitHub} from './modules/getApi.js';
import sliderOptions from './modules/sliderOptions.js'


sliderOptions()

   let formSearch = document.querySelector(".form-search");

   let formSearchInput = document.querySelector(".form-search__input-text");

   formSearch.addEventListener('submit', retrieve);

      function retrieve(e) {
         
      e.preventDefault();

      let searchItem = document.querySelectorAll(".search__item");
   
      if (searchItem.length > 0) {
         return
      }
   
      let topic = formSearchInput.value;
      if (topic === '') {
         alert("«Нужно ввести ключевое слово».")
         return
      }
        
      createPreloaderNews()
      blockNotFoudNews()
   
      let search = document.querySelector(".search");
      let preloader = document.querySelector(".container-preloader")

      let notFoundNews = document.querySelector(".not-found-news")

      formSearchInput.onchange = function () {
         let searchItem = document.querySelectorAll(".search__item");
         for (let i = 0; i < searchItem.length; i++) {
            if (searchItem[i].classList.contains("search__item")) {
               searchItem[i].remove()
            }
         }
         if (search.classList.contains("search__active")) {
            search.classList.remove("search__active")
          }

         if (notFoundNews.classList.contains("not-found-news--active")) {
            notFoundNews.classList.add("not-found-news--disabled");
         }

      }

         itemNews.length = 0
         urlNews.length = 0
         imgNews.length = 0
         titleNews.length = 0
         descriptionNews.length = 0
         sourseNameNews.length = 0
         publishedAt.length = 0


         getApiNews().then(function (news) {
            
            news.forEach(el => {
            itemNews.push(el)
            urlNews.push(el.url);
            imgNews.push(el.urlToImage);
            titleNews.push(el.title);
            descriptionNews.push(el.description);
            sourseNameNews.push(el.source.name);
            publishedAt.push(el.publishedAt)

         })
         
         createNewsBlocks()

         if (search.classList.contains("search")) {
            search.classList.add("search__active")
         }
       
         if (news.length === 0) {
            search.classList.remove("search__active");
            preloader.classList.add("container-preloader--dasabled");
            notFoundNews.classList.add("not-found-news--active");
         }
   
         getPublishedAt()
         getUrlImg()
         getUrl()
         getTitle()
         getDescription()
         getSourse()
   
         
         if (search.classList.contains("search__active")) {
            preloader.classList.add("container-preloader--dasabled")
         }
   

         })
         .catch((error) => {
            alert("«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»")
            preloader.classList.add("container-preloader--dasabled")
         })
   
   }

   function createPreloaderNews() {

      let header = document.querySelector(".header");

      let containerPreloader = document.createElement("div");

      containerPreloader.className = "container-preloader";

      header.after(containerPreloader);

      let loadImg = document.createElement('img');

      loadImg.src = "img/load-img.png";

      loadImg.className = "container-preloader_loader";

      containerPreloader.prepend(loadImg);

      let loadText = document.createElement("p");

      loadText.className = "container-preloader_load-text";

      loadText.textContent = "Идет поиск новостей...";

      containerPreloader.append(loadText);

   }

   function blockNotFoudNews() {
      let header = document.querySelector(".header");
      
      let notFoundNews = document.createElement("div");
      notFoundNews.classList.add("not-found-news");
      header.after(notFoundNews);

      let notFoundNewsImg = document.createElement("img");
      notFoundNewsImg.className = "not-found-news__img";
      notFoundNews.append(notFoundNewsImg);
      notFoundNewsImg.setAttribute("src", "img/not-found-img.png");

      let notFoundNewsHeadline = document.createElement("h3");
      notFoundNewsHeadline.textContent = "Ничего не найдено";
      notFoundNewsHeadline.className = "not-found-news__headline";
      notFoundNewsImg.after(notFoundNewsHeadline);

      let notFoundNewsText = document.createElement("p");
      notFoundNewsText.className = "not-found-news__text";
      notFoundNewsText.textContent = `К сожалению по вашему запросу ничего не найдено.`;
      notFoundNewsHeadline.after(notFoundNewsText);

   }

   function createNewsBlocks() {

      let searchItems = document.querySelector(".search-items");
      for (let i = 0; i <= 2; i++) {

         let moreNewsItem = document.createElement("a");
         moreNewsItem.className = "search__item";
         searchItems.append(moreNewsItem)
      }

      let searchItem = document.querySelectorAll(".search__item");

      for (let i = 0; i < searchItem.length; i++) {
      let imgMoreNews = document.createElement('img')

      imgMoreNews.className = "search__img"

      if (searchItem[i].firstChild === null) {

         searchItem[i].prepend(imgMoreNews)

      }

      let publishedAtMoreNews = document.createElement("div");

      publishedAtMoreNews.className = "search__date-added";

      if (searchItem[i].firstChild.nextSibling === null) {

         searchItem[i].append(publishedAtMoreNews)
      }

      let titleMoreNews = document.createElement("h2");

      titleMoreNews.className = "search__heading";

      if (searchItem[i].firstChild.nextSibling.nextSibling === null) {

         searchItem[i].append(titleMoreNews)

      }

      let descriptionMoreNews = document.createElement("p");

      descriptionMoreNews.className = "search__discription";

      if (searchItem[i].firstChild.nextSibling.nextSibling.nextSibling === null) {

         searchItem[i].append(descriptionMoreNews)

      }

      let sourceMoreNews = document.createElement("div");

      sourceMoreNews.className = "search__source-of-text";

      if (searchItem[i].firstChild.nextSibling.nextSibling.nextSibling.nextSibling === null) {

         searchItem[i].append(sourceMoreNews)

      }
   }

}

let itemNews = []
let urlNews = [];
let imgNews = [];
let titleNews = [];
let descriptionNews = [];
let sourseNameNews = [];
let publishedAt = [];


 function getPublishedAt() {

   let publishedAtItem = document.querySelectorAll('.search__date-added');
   for (let i = 0; i < publishedAtItem.length; i++) {

      let DateNews = publishedAt[i]

      let changesDate = new Date(DateNews).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'}).slice(0, -3);

      let strDateMonth = changesDate.split(" ");

      let сurrentDate = changesDate.replace(strDateMonth[1], strDateMonth[1] + ",")

      publishedAtItem[i].textContent = сurrentDate

   }
}

getPublishedAt()

function validUrl(string) {
   try {
     new URL(string);
   } catch (_) {
     return false;  
   }
 
   return true;
 }

 
function getUrlImg() {

   let newsImg = document.querySelectorAll('.search__img');
   for (let i = 0; i < newsImg.length; i++) {
      newsImg[i].setAttribute("src", imgNews[i]);

      let imgNotLoad = "https://sevastopol.triproom.ru/photo/big/noimage.png";

      if (validUrl(imgNews[i]) === false  ) {

         newsImg[i].setAttribute("src",imgNotLoad);

      }else {

         const checkImgSrc = src => {
            const img = new Image();
            img.onerror = function () { 
               if (img.onerror) {
                  newsImg[i].setAttribute("src",imgNotLoad);
               }
             }
            img.src = src;
          }
         
          checkImgSrc(imgNews[i])
      }      
   }
}

getUrlImg()

function getUrl() {
   let btnMoreNews = document.querySelector(".search__button");
   let searchItem = document.querySelectorAll(".search__item");
   for (let i = 0; i < searchItem.length; i++) {
      searchItem[i].setAttribute("href", urlNews[i])
      searchItem[i].setAttribute("target", "_blank")
   }
   if (searchItem.length >= itemNews.length) {
      btnMoreNews.classList.add("disabled--btn")
   } else {
      btnMoreNews.classList.remove("disabled--btn")
   }

   for (let i = 0; i < searchItem.length; i++) {

    let atribute = searchItem[i].getAttribute("href");
    if (atribute === "undefined") {
      searchItem[i].remove();
    }
      
   }
}

getUrl()

function getTitle() {

   let searchTitle = document.querySelectorAll('.search__heading');
   for (let i = 0; i < searchTitle.length; i++) {
      searchTitle[i].textContent = titleNews[i];
   }

}

getTitle()

function getDescription() {

   let searchDiscription = document.querySelectorAll('.search__discription');
   for (let i = 0; i < searchDiscription.length; i++) {
      searchDiscription[i].textContent = descriptionNews[i];
   }

}

getDescription()

function getSourse() {

   let searchSource = document.querySelectorAll('.search__source-of-text');
   for (let i = 0; i < searchSource.length; i++) {
      searchSource[i].textContent = sourseNameNews[i];
   }

}

getSourse()

let btnMoreNews = document.querySelector(".search__button");
btnMoreNews.addEventListener("click", function () {

   createNewsBlocks() 

      getPublishedAt()
    
      getUrlImg()
     
      getUrl()

      getTitle()

      getDescription()

      getSourse()

      let searchItem = document.querySelectorAll(".search__item");
         if (searchItem.length >= itemNews.length) {
         btnMoreNews.classList.add("disabled--btn")
      }
   
})

//    GITHUB COMMITS

   let commitsDate = [];
   let commitsAvatar = [];
   let commitsAuthorName = [];
   let commitsAuthorEmail = [];
   let commitsMessage = [];
   let commitsUrl = []

   getApiGitHub().then(function (commits) {
            
   for (let i = 0; i < 20; i++) {

      commitsDate.push(commits[i].commit.author.date);
      commitsAvatar.push(commits[i].author.avatar_url);
      commitsAuthorName.push(commits[i].commit.author.name);
      commitsAuthorEmail.push(commits[i].commit.author.email);
      commitsMessage.push(commits[i].commit.message);
      commitsUrl.push(commits[i].html_url);

   }

   $(function createSliderBlocks() {
         
      for (let i = 0; i < 20; i++) {

        $('.multiple-items').slick('slickAdd','<a class="history__slider-item"></a>');
     
     }

     let nodeSlider = document.getElementsByClassName("history__slider-item");

     for (let i = 0; i < nodeSlider.length; i++) {

      nodeSlider[i].setAttribute("href", commitsUrl[i]);

        let sliderItemDate = document.createElement("div");
        sliderItemDate.className = "history__date";
        sliderItemDate.textContent = commitsDate[i]
        nodeSlider[i].prepend(sliderItemDate);

        let sliderAuthorInfo = document.createElement("div");
        sliderAuthorInfo.className = "history__author-info";
        sliderItemDate.after(sliderAuthorInfo);

        let sliderItemAvatar = document.createElement("img");
        sliderItemAvatar.className = "history__author-foto" ; 
        sliderItemAvatar.setAttribute("src",commitsAvatar[i]);
        sliderAuthorInfo.prepend(sliderItemAvatar);

        let wrapName = document.createElement("div");
        wrapName.className = "history__name-email";
        sliderItemAvatar.after(wrapName);

        let sliderItemName = document.createElement("div");
        sliderItemName.className = "history__author-name";
        sliderItemName.textContent = commitsAuthorName[i];
        wrapName.prepend(sliderItemName);

        let sliderItemEmail = document.createElement("div");
        sliderItemEmail.className = "history__author-email";
        sliderItemEmail.textContent = commitsAuthorEmail[i];
        wrapName.firstChild.after(sliderItemEmail);

        let sliderItemCommits = document.createElement("div");
        sliderItemCommits.className = "history__author-text";
        sliderItemCommits.textContent = commitsMessage[i];
        sliderAuthorInfo.after(sliderItemCommits)
      
     }

  });

   let historyDate = document.querySelectorAll(".history__date");

   for (let i = 0; i < historyDate.length; i++) {

      let dateCommits = commitsDate[i];

      let changesDate = new Date(dateCommits).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'}).slice(0, -3);

      let strDateMonth = changesDate.split(" ");

      let сurrentDate = changesDate.replace(strDateMonth[1], strDateMonth[1] + ",");

      historyDate[i].textContent = сurrentDate

   }
   
   }).catch((error) => {
      console.log(error)
   })

   
 