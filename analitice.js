
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
if (countNumber > 4) {
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

let headlineText = arr.join("")


count = 0;
pos = headlineText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
while ( pos != -1 ) {
   count++;
   pos = headlineText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
}

let date = new Date()
date.getMonth()
let options = {
 month: 'long',
};
 let currentDateMonth = new Date(date).toLocaleDateString('ru', options);
 let currentMonth = document.querySelector(".analitics__month");
 currentMonth.textContent = `(${currentDateMonth})`;

 // get analytics-by-day

 let seventhDayData = localStorage.getItem('seventhDay');
 seventhDayData = JSON.parse(seventhDayData);

 let arrSeventhDayData = [];

 seventhDayData.forEach(el =>{
    arrSeventhDayData.push(el.title)
 })


 let arrSeventhDayDataText = arrSeventhDayData.join("");

    count7 = 0;
    pos = arrSeventhDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
    while ( pos != -1 ) {
    count7++;
    pos = arrSeventhDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
    }
    let progressBarItem = document.getElementById("progress-seventh-item");
    progressBarItem.value = count7

    
    let countSeventhDay = document.querySelector(".progress-seventh-item");
    countSeventhDay.textContent = count7;


 console.log(count7)
 /////////////////////////////////////////////////////////////////

 let sixthDayData = localStorage.getItem('sixthDay');
 sixthDayData = JSON.parse(sixthDayData);

 let arrSixthDayData = [];

 sixthDayData.forEach(el =>{
    arrSixthDayData.push(el.title)
 })


 let arrSixthDayDataText = arrSixthDayData.join("");

    count6 = 0;
    pos = arrSixthDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
    while ( pos != -1 ) {
    count6++;
    pos = arrSixthDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
    }


 console.log(count6)