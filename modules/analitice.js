function createElemDay() {

   let parentElemDate = document.querySelector(".analitics-days__date");
   let parentElemProg = document.querySelector(".progress-bar");

   let idNum = 0;

   for (let i = 0; i < 7; i++) {

     idNum ++

      let li = document.createElement("li");

      li.classList.add("analitics-days__date-item", "font_family");

      li.setAttribute("id", `day-${idNum}`);

      parentElemDate.prepend(li);

      let progItem = document.createElement("div");

      progItem.classList.add(`progress-item-${idNum}`,`progress-item`);

      parentElemProg.prepend(progItem);

      let progList = document.createElement("li");

      progList.classList.add("progress-bar__list-item");

      progItem.after(progList);

      let progLine = document.createElement("progress");

      progLine.setAttribute("id",`count-progress-item-${idNum}`);
      
      progLine.setAttribute("max",100);

      progLine.classList.add("progress-bar__item");

      progList.prepend(progLine);

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

   let analiticeDay = localStorage.getItem('AnaliticeDay');

   analiticeDay = JSON.parse(analiticeDay);
  
   let analiticeDayArr = [];

   for (let i = 0; i < analiticeDay.length; i++) {
      
      analiticeDayArr.push(analiticeDay[i])
   }

 let arrProgBar = [];

 for (let i = 1; i < 8; i++) {
   
   let progressBarItem = document.getElementById(`count-progress-item-${i}`);

   arrProgBar.push(progressBarItem)

 }

   let arrCountDay = [];

   for (let i = 1; i < 8; i++) {
            
      let countDayItem = document.querySelector(`.progress-item-${i}`);

      arrCountDay.push(countDayItem)
      
   }

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

      proBar.value = count;
      
      countDay.textContent = count;

      totalHeadlines+=count
      
   }

      for (let i = 0; i < 7; i++) {
         
         getAnalyticsData(analiticeDayArr[i],arrProgBar[i],arrCountDay[i]);
   
      }

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

   let arrAnaliticeDay = [];

   for (let i = 1; i < 8; i++) {
      
      let analiticeDayItem = document.getElementById(`day-${i}`);

      arrAnaliticeDay.push(analiticeDayItem) 
   }

   for (let i = 0; i < 7; i++) {

      arrAnaliticeDay[i].textContent = dates[i];
      
   }
   














