
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
} else if(countNumber == 4) {
   let stringConter = totalResults.toString().slice(0, 1) + " " + totalResults.toString().slice(1, 5);
    totalResultsString.textContent = stringConter
} else {
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

 // get analytics by day 7

 let seventhDayData = localStorage.getItem('seventhDayData');
 seventhDayData = JSON.parse(seventhDayData);

 let getWeekDay7 = new Date(new Date().getTime() - (6 * 24 * 60 * 60 * 1000));
    let getNumberDay7 = getWeekDay7.toDateString().slice(8, 10);
 

 let arrSeventhDayData = [];

 seventhDayData.forEach(el =>{
    arrSeventhDayData.push(el.title);
 })

 let arrSeventhDayDataText = arrSeventhDayData.join("");

    count7 = 0;
    pos = arrSeventhDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
    while ( pos != -1 ) {
    count7++;
    pos = arrSeventhDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
    }
    let progressBarItem7 = document.getElementById("progress-seventh-item");
    progressBarItem7.value = count7;

    let countDayItem7 = document.querySelector(".progress-seventh-item");
    countDayItem7.textContent = count7;
   
    
 // get analytics by day 6

 let sixthDayData = localStorage.getItem('sixthDay');
 sixthDayData = JSON.parse(sixthDayData);
 let getWeekDay6 = new Date(new Date().getTime() - (5 * 24 * 60 * 60 * 1000));
 let getNumberDay6 = getWeekDay6.toDateString().slice(8, 10);

 let arrSixthDayData = [];

 sixthDayData.forEach(el =>{
    arrSixthDayData.push(el.title);
 })

 let arrSixthDayDataText = arrSixthDayData.join("");
    count6 = 0;
    pos = arrSixthDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
    while ( pos != -1 ) {
    count6++;
    pos = arrSixthDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
    }

    let progressBarItem6 = document.getElementById("progress-sixth-item");
    progressBarItem6.value = count6;

    let countDayItem6 = document.querySelector(".progress-sixth-item");
    countDayItem6.textContent = count6;

 // get analytics by day 5

 let fiftDayData = localStorage.getItem('fifthDay');
 fiftDayData = JSON.parse(fiftDayData);
 let getWeekDay5 = new Date(new Date().getTime() - (4 * 24 * 60 * 60 * 1000));
 let getNumberDay5 = getWeekDay5.toDateString().slice(8, 10);

 let arrFiftDayData = [];

 fiftDayData.forEach(el =>{
   arrFiftDayData.push(el.title);
 })

 let arrFiftDayDataText = arrFiftDayData.join("");
 
    count5 = 0;
    pos = arrFiftDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
    while ( pos != -1 ) {
    count5++;
    pos = arrFiftDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
    }

    let progressBarItem5 = document.getElementById("progress-fifth-item");
    progressBarItem5.value = count5;

    let countDayItem5 = document.querySelector(".progress-fifth-item");
    countDayItem5.textContent = count5;
// get analytics by day 4

let fourthDayData = localStorage.getItem('fourthDay');
fourthDayData = JSON.parse(fourthDayData);
let getWeekDay4 = new Date(new Date().getTime() - (3 * 24 * 60 * 60 * 1000))
let getNumberDay4 = getWeekDay4.toDateString().slice(8, 10);
let arrFourthDayData = [];

fourthDayData.forEach(el =>{
   arrFourthDayData.push(el.title);
})

let arrFourthDayDataText = arrFourthDayData.join("");

   count4 = 0;
   pos = arrFourthDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
   while ( pos != -1 ) {
   count4++;
   pos = arrFourthDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
   }

   let progressBarItem4 = document.getElementById("progress-fourth-item");
   progressBarItem4.value = count4;

   let countDayItem4 = document.querySelector(".progress-fourth-item");
   countDayItem4.textContent = count4;


// get analytics by day 3

let thirdDayData = localStorage.getItem('thirdDay');
thirdDayData = JSON.parse(thirdDayData);
let getWeekDay3 = new Date(new Date().getTime() - (2 * 24 * 60 * 60 * 1000));
let getNumberDay3 = getWeekDay3.toDateString().slice(8, 10);

let arrThirdDayData = [];

thirdDayData.forEach(el =>{
   arrThirdDayData.push(el.title);
})

let arrThirdDayDataText = arrThirdDayData.join("");

   count3 = 0;
   pos = arrThirdDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
   while ( pos != -1 ) {
   count3++;
   pos = arrThirdDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
   }

   let progressBarItem3 = document.getElementById("progress-third-item");
   progressBarItem3.value = count3;
   let countDayItem3 = document.querySelector(".progress-third-item");
   countDayItem3.textContent = count3;

   // get analytics by day 2

let secondDayData = localStorage.getItem('secondDay');
secondDayData = JSON.parse(secondDayData);
let getWeekDay2 = new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000));
let getNumberDay2 = getWeekDay2.toDateString().slice(8, 10);

let arrSecondDayData = [];

secondDayData.forEach(el =>{
   arrSecondDayData.push(el.title);
})

let arrSecondDayDataText = arrSecondDayData.join("");

   count2 = 0;
   pos = arrSecondDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
   while ( pos != -1 ) {
   count2++;
   pos = arrSecondDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
   }

   let progressBarItem2 = document.getElementById("progress-second-item");
   progressBarItem2.value = count2;
   let countDayItem2 = document.querySelector(".progress-second-item");
   countDayItem2.textContent = count2;

// get analytics by first day

let firstDayData = localStorage.getItem('firstDay');
firstDayData = JSON.parse(firstDayData);
let getWeekDay1 = new Date();
let getNumberDay1 = getWeekDay1.toDateString().slice(8, 10)

let arrFirstDayData = [];

firstDayData.forEach(el =>{
   arrFirstDayData.push(el.title);
})

let arrFirstDayDataText = arrFirstDayData.join("");

   count1 = 0;
   pos = arrFirstDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
   while ( pos != -1 ) {
   count1++;
   pos = arrFirstDayDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
   }

   let progressBarItem1 = document.getElementById("progress-first-item");
   progressBarItem1.value = count1
   let countDayItem1 = document.querySelector(".progress-first-item");
   countDayItem1.textContent = count1;

// get day of week
function getWeekDay(getWeekDay7) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[getWeekDay7.getDay()];  
}
let dateItem7 = getNumberDay7 +", " + getWeekDay(getWeekDay7).toLowerCase(); 
let analiticeDayItem7 = document.getElementById("day-7");
analiticeDayItem7.textContent = dateItem7;

let dateItem6 = getNumberDay6 +", " + getWeekDay(getWeekDay6).toLowerCase(); 
let analiticeDayItem6 = document.getElementById("day-6");
analiticeDayItem6.textContent = dateItem6;

let dateItem5 = getNumberDay5 +", " + getWeekDay(getWeekDay5).toLowerCase(); 
let analiticeDayItem5 = document.getElementById("day-5");
analiticeDayItem5.textContent = dateItem5;

let dateItem4 = getNumberDay4 +", " + getWeekDay(getWeekDay4).toLowerCase(); 
let analiticeDayItem4 = document.getElementById("day-4");
analiticeDayItem4.textContent = dateItem4;

let dateItem3 = getNumberDay3 +", " + getWeekDay(getWeekDay3).toLowerCase(); 
let analiticeDayItem3 = document.getElementById("day-3");
analiticeDayItem3.textContent = dateItem3;

let dateItem2 = getNumberDay2 +", " + getWeekDay(getWeekDay2).toLowerCase(); 
let analiticeDayItem2 = document.getElementById("day-2");
analiticeDayItem2.textContent = dateItem2;


let dateItem1 = getNumberDay1 +", " + getWeekDay(getWeekDay1).toLowerCase();
let analiticeDayItem1 = document.getElementById("day-1");
analiticeDayItem1.textContent = dateItem1;


let counterHeadlinesNews = document.querySelector(".counter-week__headline__count");
let countHeadlines = count1 + count2 + count3 + count4 + count5 + count6 + count7;
counterHeadlinesNews.textContent = countHeadlines;




