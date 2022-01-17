
      import {createElemDay} from './analiticeCreateEl.js'
      import { getTopicNews,getCountNews,getCountTitleNews,getAnalyticsData,getDataLocalStor} from '../modules/analiciceGetsDatas.js';

      createElemDay();
      getTopicNews();
      getCountNews();
      getCountTitleNews();

      let arrCountDay = [];

      let arrProgBar = [];

      let arrAnaliticeDay = [];

      for (let i = 1; i < 8; i++) {
         
         let analiticeDayItem = document.getElementById(`day-${i}`);
   
         arrAnaliticeDay.push(analiticeDayItem);

         let progressBarItem = document.getElementById(`count-progress-item-${i}`);
   
         arrProgBar.push(progressBarItem);
   
         let countDayItem = document.querySelector(`.progress-item-${i}`);
   
         arrCountDay.push(countDayItem);

      }

         let dates = [];

         let countHeadlines = [];
         
         let dateCurrent = new Date();

         for (let i = 0; i < 7; i++){

            let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

            let tempDate = new Date();
            tempDate.setDate(dateCurrent.getDate()-i);
            
            let str = tempDate.getDate() + ", " + days[tempDate.getDay()]; 
            
            dates.push(str);
           
            getAnalyticsData(getDataLocalStor()[i],arrProgBar[i],arrCountDay[i]);

            arrAnaliticeDay[i].textContent = dates[i];

            countHeadlines.push(arrProgBar[i].value)
            
         }

         function totalHeadlines(x) {

            let totalHeadlines = countHeadlines.map(i=>x+=i, x=0).reverse()[0]

            let counterHeadlinesNews = document.querySelector(".counter-week__headline__count");

            counterHeadlinesNews.textContent = totalHeadlines;

         }
         
         totalHeadlines()
   
   














