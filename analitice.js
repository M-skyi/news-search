
// get topic News

let topicValueLocal = localStorage.getItem('topicNews');
let topicValue = document.querySelector(".topic-request__item");
topicValue.textContent = `Вы спросили: «${topicValueLocal}»`;

// number of news per week

let weekCounterNews = localStorage.getItem('url');
weekCounterNews = JSON.parse(weekCounterNews);


let totalResults = weekCounterNews.totalResults;
let totalResultsString = document.querySelector(".counter-week__count");
let countNumber = totalResults.toString().length
if (countNumber >= 4) {
    let stringConter = totalResults.toString().slice(0, 2) + " " + totalResults.toString().slice(2, 5);
    totalResultsString.textContent = stringConter
}else{
    totalResultsString.textContent = totalResults
}

//number of title per week

let titleNews = weekCounterNews.articles;


let arr = [];
titleNews.forEach(el => {
    arr.push(el.title)  
});

let headlineText = arr.join(",")

count = 0;
pos = headlineText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
while ( pos != -1 ) {
   count++;
   pos = headlineText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
}

console.log(count)