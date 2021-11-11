

$(document).ready(function () {
   $('.multiple-items').slick({
      variableWidth: true,
      arrows: true,
      dots: true,
      slidesToShow: 15,
      slidesToScroll:4,
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
               slidesToShow: 14,
               slidesToScroll: 2,
               infinite: false,
            }
         },
         {
            breakpoint: 425,
            settings: {
               arrows: false,
               centerPadding: '0px',
               slidesToShow: 16,
               slidesToScroll: 1,
               infinite: false,
            }
         }

      ]

   });
});

 let formSearch = document.querySelector(".form-search");

let formSearchInput = document.querySelector(".form-search__input-text");

let buttonSearch = document.querySelector(".form-search__input-btn")

let options = {
   year: 'numeric',
   month: 'long',
   day: 'numeric',
   weekday: 'long'
};

const todaysDate = new Date().toLocaleDateString('sv-SE');
const fromDate = new Date(new Date().getTime() - (6 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
const sixthDayDate = new Date(new Date().getTime() - (5 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
const fifthDayDate = new Date(new Date().getTime() - (4 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
const fourthDayDate = new Date(new Date().getTime() - (3 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
const thirdDayDate = new Date(new Date().getTime() - (2 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
const secondDayDate = new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
formSearch.addEventListener('submit', retrieve);


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

function retrieve(e) {

   e.preventDefault()

   createPreloaderNews()
   
   let apiKey = "2213f1e36fb8400bb4eef4e632efffe3";

   let topic = formSearchInput.value;

   let preloader = document.querySelector(".container-preloader")

   if (topic === "") {
      alert("«Нужно ввести ключевое слово»")
      preloader.classList.add("container-preloader--dasabled")
      return
   }

   localStorage.setItem('topicNews', topic);

   let url = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${fromDate}&to=${todaysDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;
   
   let seventhDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${fromDate}&to=${fromDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let sixthDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${sixthDayDate}&to=${sixthDayDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let fifthDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${fifthDayDate}&to=${fifthDayDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let fourthDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${fourthDayDate}&to=${fourthDayDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let thirdDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${thirdDayDate}&to=${thirdDayDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let secondDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${secondDayDate}&to=${secondDayDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let firstDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${todaysDate}&to=${todaysDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let dayArr = ['firstDay','secondDay','thirdDay','fourthDay','fifthDay','sixthDay','seventhDay'];
  
   function savedlocalStorage(dayItem) {

      fetch(dayItem).then((res) => {
         return res.json()
      }).then((item) => {
         let data = item.articles;
         
         for (let i = 0; i < dayArr.length; i++) {
         
            if (dayItem === firstDay) {
               localStorage.setItem(`${dayArr[0]}`, JSON.stringify(data)); 
            }else if (dayItem === secondDay) {
               localStorage.setItem(`${dayArr[1]}`, JSON.stringify(data));
            }else if (dayItem === thirdDay) {
               localStorage.setItem(`${dayArr[2]}`, JSON.stringify(data));
            }else if (dayItem === fourthDay) {
               localStorage.setItem(`${dayArr[3]}`, JSON.stringify(data));
            }else if (dayItem === fifthDay) {
               localStorage.setItem(`${dayArr[4]}`, JSON.stringify(data));
            }else if (dayItem === sixthDay) {
               localStorage.setItem(`${dayArr[5]}`, JSON.stringify(data));
            }else if (dayItem === seventhDay) {
               localStorage.setItem(`${dayArr[6]}`, JSON.stringify(data));
            }
         }
       })
       }
 
       savedlocalStorage(firstDay)
   // test(secondDay)
   // test(thirdDay)
   // test(fourthDay)
   // test(fifthDay)
   // test(sixthDay)
   // test(seventhDay)
   


   fetch(url).then((res) => {
      return res.json()
   }).then((data)=> {

      localStorage.setItem('url', JSON.stringify(data));
      let news = data.articles;



      formSearchInput.onchange = function () {
         let searchItem = document.querySelectorAll(".search__item");
         for (let i = 0; i < searchItem.length; i++) {
            if (searchItem[i].classList.contains("search__item")) {
               searchItem[i].remove()
            }
         }
         let notFoundNews = document.querySelector(".not-found-news")
         if (search.classList.contains("search__active")) {
            search.classList.remove("search__active")
          }

         if (notFoundNews.classList.contains("not-found-news")) {
            notFoundNews.remove();
         }

      }

      itemNews.length = 0
      urlNews.length = 0
      imgNews.length = 0
      titleNews.length = 0
      descriptionNews.length = 0
      sourseNameNews.length = 0
      publishedAt.length = 0


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

      let search = document.querySelector(".search");

      if (search.classList.contains("search")) {
         search.classList.add("search__active")
      }
    
      //show block not found news
      if (news.length === 0) {
         search.classList.remove("search__active");
         preloader.classList.add("container-preloader--dasabled");
         blockNotFoudNews()
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


   }).catch((error) => {
      alert(error)
   })

}

function blockNotFoudNews() {
   let header = document.querySelector(".header");
   
   let notFoundNews = document.createElement("div");
   notFoundNews.classList.add("not-found-news", "not-found-news--active");
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

 // adding a published At News API
 function getPublishedAt() {

   let publishedAtItem = document.querySelectorAll('.search__date-added');
   for (let i = 0; i < publishedAtItem.length; i++) {

      let DateNews = publishedAt[i]

      let options = {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      };

      let changesDate = new Date(DateNews).toLocaleDateString('ru', options).slice(0, -3);

      let strDateMonth = changesDate.split(" ");

      let сurrentDate = changesDate.replace(strDateMonth[1], strDateMonth[1] + ",")

      publishedAtItem[i].textContent = сurrentDate

   }
}

getPublishedAt()

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

//   GET GITHUB COMMITS

let reposUrl = `https://api.github.com/repos/M-skyi/Test_Valencia_JS/commits`


fetch(reposUrl).then((res) => {
   return res.json()
}).then((reposData) => {


   let commitsDate = [];
   let commitsAvatar = [];
   let commitsAuthorName = [];
   let commitsAuthorEmail = [];
   let commitsMessage = [];
   let commitsUrl = []


   for (let i = 0; i < 20; i++) {

      commitsDate.push(reposData[i].commit.author.date);
      commitsAvatar.push(reposData[i].author.avatar_url);
      commitsAuthorName.push(reposData[i].commit.author.name);
      commitsAuthorEmail.push(reposData[i].commit.author.email);
      commitsMessage.push(reposData[i].commit.message);
      commitsUrl.push(reposData[i].html_url);

   }

   $(function test() {
         
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

      let options = {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
      };

      let changesDate = new Date(dateCommits).toLocaleDateString('ru', options).slice(0, -3);

      let strDateMonth = changesDate.split(" ");

      let сurrentDate = changesDate.replace(strDateMonth[1], strDateMonth[1] + ",");

      historyDate[i].textContent = сurrentDate

   }

}).catch((error) => {
   alert(error)
})


