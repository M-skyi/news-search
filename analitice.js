
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

 let seventhDayData = localStorage.getItem('seventhDay');
 seventhDayData = JSON.parse(seventhDayData);
 let getWeekDay7 = new Date(new Date().getTime() - (6 * 24 * 60 * 60 * 1000));
 let getNumberDay7 = getWeekDay7.toDateString().slice(8, 10);
 let progressBarItem7 = document.getElementById("progress-seventh-item");
 let countDayItem7 = document.querySelector(".progress-seventh-item");
    
   
    
 // get analytics by day 6

 let sixthDayData = localStorage.getItem('sixthDay');
 sixthDayData = JSON.parse(sixthDayData);
 let getWeekDay6 = new Date(new Date().getTime() - (5 * 24 * 60 * 60 * 1000));
 let getNumberDay6 = getWeekDay6.toDateString().slice(8, 10);
 let progressBarItem6 = document.getElementById("progress-sixth-item");
 let countDayItem6 = document.querySelector(".progress-sixth-item");


 // get analytics by day 5

 let fiftDayData = localStorage.getItem('fifthDay');
 fiftDayData = JSON.parse(fiftDayData);
 let getWeekDay5 = new Date(new Date().getTime() - (4 * 24 * 60 * 60 * 1000));
 let getNumberDay5 = getWeekDay5.toDateString().slice(8, 10);
 let progressBarItem5 = document.getElementById("progress-fifth-item");
 let countDayItem5 = document.querySelector(".progress-fifth-item");

// get analytics by day 4

let fourthDayData = localStorage.getItem('fourthDay');
fourthDayData = JSON.parse(fourthDayData);
let getWeekDay4 = new Date(new Date().getTime() - (3 * 24 * 60 * 60 * 1000))
let getNumberDay4 = getWeekDay4.toDateString().slice(8, 10);
 let progressBarItem4 = document.getElementById("progress-fourth-item");
 let countDayItem4 = document.querySelector(".progress-fourth-item");



// get analytics by day 3

let thirdDayData = localStorage.getItem('thirdDay');
thirdDayData = JSON.parse(thirdDayData);
let getWeekDay3 = new Date(new Date().getTime() - (2 * 24 * 60 * 60 * 1000));
let getNumberDay3 = getWeekDay3.toDateString().slice(8, 10);
 let progressBarItem3 = document.getElementById("progress-third-item");
 let countDayItem3 = document.querySelector(".progress-third-item");
  

   // get analytics by day 2

let secondDayData = localStorage.getItem('secondDay');
secondDayData = JSON.parse(secondDayData);
let getWeekDay2 = new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000));
let getNumberDay2 = getWeekDay2.toDateString().slice(8, 10);
let progressBarItem2 = document.getElementById("progress-second-item");
let countDayItem2 = document.querySelector(".progress-second-item");


// get analytics by day 1


let firstDayData = localStorage.getItem('firstDay');
firstDayData = JSON.parse(firstDayData);
let getWeekDay1 = new Date();
let getNumberDay1 = getWeekDay1.toDateString().slice(8, 10)
let progressBarItem1 = document.getElementById("progress-first-item");
let countDayItem1 = document.querySelector(".progress-first-item");


   let totalHeadlines = 0;
 
 function analitics(arr,proBar,countDay,count) {
      
      let arrData = [];

      arr.forEach(el =>{
         arrData.push(el.title);
      })

      let arrDataText = arrData.join("");

      count = 0;
      pos = arrDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase());
      while ( pos != -1 ) {
      count++;
      pos = arrDataText.toLowerCase().indexOf(`${topicValueLocal}`.toLowerCase(),pos+1);
      }

      proBar.value = count
      
      countDay.textContent = count;

      totalHeadlines+=count
      
   }

analitics(firstDayData,progressBarItem1,countDayItem1);
analitics(secondDayData,progressBarItem2,countDayItem2);
analitics(thirdDayData,progressBarItem3,countDayItem3);
analitics(fourthDayData,progressBarItem4,countDayItem4);
analitics(fiftDayData,progressBarItem5,countDayItem5);
analitics(sixthDayData,progressBarItem6,countDayItem6);
analitics(seventhDayData,progressBarItem7,countDayItem7);











// get day of week
function getWeekDay(getWeekDay) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[getWeekDay.getDay()];  
}



let counterHeadlinesNews = document.querySelector(".counter-week__headline__count");
let countHeadlines = totalHeadlines;
counterHeadlinesNews.textContent = countHeadlines;



function getDayOfWeek() {
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
}

getDayOfWeek()