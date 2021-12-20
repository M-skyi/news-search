function createElemDay() {

   let parentElemDate = document.querySelector(".analitics-days__date");

   let idNum = 0;

   for (let i = 0; i < 7; i++) {

     idNum ++

      let li = document.createElement("li");

      li.classList.add("analitics-days__date-item", "font_family");

      li.setAttribute("id", `day-${idNum}`);

      parentElemDate.prepend(li);
   }
   
}

createElemDay()

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
   
 function getProgressItem(item) {

    let progressItem = document.getElementById(item);

    return progressItem
 }

 let progressBarItem7 = getProgressItem("count-progress-item-7");
 let progressBarItem6 = getProgressItem("count-progress-item-6");
 let progressBarItem5 = getProgressItem("count-progress-item-5");
 let progressBarItem4 = getProgressItem("count-progress-item-4");
 let progressBarItem3 = getProgressItem("count-progress-item-3");
 let progressBarItem2 = getProgressItem("count-progress-item-2");
 let progressBarItem1 = getProgressItem("count-progress-item-1");

 function getCountDayItem(item) {

    let countDayItem = document.querySelector(item);

    return countDayItem
 }

 let countDayItem7 = getCountDayItem(".progress-item-7");
 let countDayItem6 = getCountDayItem(".progress-item-6");
 let countDayItem5 = getCountDayItem(".progress-item-5");
 let countDayItem4 = getCountDayItem(".progress-item-4");
 let countDayItem3 = getCountDayItem(".progress-item-3");
 let countDayItem2 = getCountDayItem(".progress-item-2");
 let countDayItem1 = getCountDayItem(".progress-item-1");

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

let arrReversed = dates.reverse();

function getAnaliticeDay(item) {

   let itemDay = document.getElementById(item);

   return itemDay
}

let analiticeDayItem7 = getAnaliticeDay("day-7");
let analiticeDayItem6 = getAnaliticeDay("day-6");
let analiticeDayItem5 = getAnaliticeDay("day-5");
let analiticeDayItem4 = getAnaliticeDay("day-4");
let analiticeDayItem3 = getAnaliticeDay("day-3");
let analiticeDayItem2 = getAnaliticeDay("day-2");
let analiticeDayItem1 = getAnaliticeDay("day-1");


function correctDate(itemDay,num) {

   let date =  itemDay.textContent = dates[num];

   return date
}

correctDate(analiticeDayItem7,0);
correctDate(analiticeDayItem6,1);
correctDate(analiticeDayItem5,2);
correctDate(analiticeDayItem4,3);
correctDate(analiticeDayItem3,4);
correctDate(analiticeDayItem2,5);
correctDate(analiticeDayItem1,6);
 














