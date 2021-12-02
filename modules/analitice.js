
// get topic News

let topicValueLocal = localStorage.getItem('topicNews');

let topicValue = document.querySelector(".topic-request__item");

topicValue.textContent = `Вы спросили: «${topicValueLocal}»`;

// get count of news per week

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

//get count of title per week

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
 let currentDateMonth = new Date(date).toLocaleDateString('ru', {month: 'long',});

 let currentMonth = document.querySelector(".analitics__month");

 currentMonth.textContent = `(${currentDateMonth})`;

 function getItemFromLocalStorage(item){ 
    let dayData = localStorage.getItem(item);
    return JSON.parse(dayData); 
   } 

   seventhDayData = getItemFromLocalStorage('seventhDay');
   sixthDayData = getItemFromLocalStorage('sixthDay');
   fiftDayData = getItemFromLocalStorage('fifthDay');
   fourthDayData = getItemFromLocalStorage('fourthDay');
   thirdDayData = getItemFromLocalStorage('thirdDay');
   secondDayData = getItemFromLocalStorage('secondDay');
   firstDayData = getItemFromLocalStorage('firstDay');
   

 //get elements from html

 let progressBarItem7 = document.getElementById("count-progress-seventh-item");
 let countDayItem7 = document.querySelector(".progress-seventh-item");

 let progressBarItem6 = document.getElementById("count-progress-sixth-item");
 let countDayItem6 = document.querySelector(".progress-sixth-item");

 let progressBarItem5 = document.getElementById("count-progress-fifth-item");
 let countDayItem5 = document.querySelector(".progress-fifth-item");

 let progressBarItem4 = document.getElementById("count-progress-fourth-item");
 let countDayItem4 = document.querySelector(".progress-fourth-item");

 let progressBarItem3 = document.getElementById("count-progress-third-item");
 let countDayItem3 = document.querySelector(".progress-third-item");
 
let progressBarItem2 = document.getElementById("count-progress-second-item");
let countDayItem2 = document.querySelector(".progress-second-item");

let progressBarItem1 = document.getElementById("count-progress-first-item");
let countDayItem1 = document.querySelector(".progress-first-item");

//get analytics data

   let totalHeadlines = 0;

 function getAnalyticsData(arr,proBar,countDay) {
      
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

   getAnalyticsData(firstDayData,progressBarItem1,countDayItem1);
   getAnalyticsData(secondDayData,progressBarItem2,countDayItem2);
   getAnalyticsData(thirdDayData,progressBarItem3,countDayItem3);
   getAnalyticsData(fourthDayData,progressBarItem4,countDayItem4);
   getAnalyticsData(fiftDayData,progressBarItem5,countDayItem5);
   getAnalyticsData(sixthDayData,progressBarItem6,countDayItem6);
   getAnalyticsData(seventhDayData,progressBarItem7,countDayItem7);

let counterHeadlinesNews = document.querySelector(".counter-week__headline__count");
let countHeadlines = totalHeadlines;
counterHeadlinesNews.textContent = countHeadlines;


let dates = [];
let dateCurrent = new Date();

for (let i = 0; i < 7; i++){
   let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

   let tempDate = new Date();
   tempDate.setDate(dateCurrent.getDate()-i);
   
   let str = tempDate.getDate() + ", " + days[tempDate.getDay()]; 
   
   dates.push(str);  

}

let arrRevrsed = dates.reverse();

let analiticeDayItem7 = document.getElementById("day-7");
let analiticeDayItem6 = document.getElementById("day-6");
let analiticeDayItem5 = document.getElementById("day-5");
let analiticeDayItem4 = document.getElementById("day-4");
let analiticeDayItem3 = document.getElementById("day-3");
let analiticeDayItem2 = document.getElementById("day-2");
let analiticeDayItem1 = document.getElementById("day-1");

for (let i = 0; i < arrRevrsed.length; i++) {
   analiticeDayItem7.textContent = dates[0];
   analiticeDayItem6.textContent = dates[1];
   analiticeDayItem5.textContent = dates[2];
   analiticeDayItem4.textContent = dates[3];
   analiticeDayItem3.textContent = dates[4];
   analiticeDayItem2.textContent = dates[5];
   analiticeDayItem1.textContent = dates[6];
}









