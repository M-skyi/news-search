
// get topic News

let topicValueLocal = localStorage.getItem('topicNews');
let topicValue = document.querySelector(".topic-request__item");
topicValue.textContent = `Вы спросили: «${topicValueLocal}»`;

// number of news per week

let weekCounterNews = localStorage.getItem('url');
weekCounterNews = JSON.parse(weekCounterNews);
console.log(weekCounterNews)

let totalResults = weekCounterNews.totalResults;
console.log(totalResults)
let totalResultsString = document.querySelector(".counter-week__count");
let stringConter = totalResults.toString().slice(0, 2) + " " + totalResults.toString().slice(2, 5);
totalResultsString.textContent = stringConter

// number of title per week

let titleNews = weekCounterNews.articles;
titleNews.forEach(el => {


});






