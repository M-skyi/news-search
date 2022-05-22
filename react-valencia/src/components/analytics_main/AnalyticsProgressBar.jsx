import '../../styles/Analytics.css';
import AnalyticsProgressBarItem from './AnalyticsProgressBarItem';
import { useState } from 'react'

 
const AnalyticsProgressBar = (props) =>{


        let dates = []

        let dateCurrent = new Date();

         for (let i = 0; i < 7; i++){

            function getDate() {

               let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

               let tempDate = new Date();
               tempDate.setDate(dateCurrent.getDate()-i);
               
               let str = tempDate.getDate() + ", " + days[tempDate.getDay()]; 
               
               dates.push(str);

            }
            getDate()
        }
        
        dates.reverse()

    return(
        <div className={"analytics-progress-bar"}>
           
           <ul className="progress-bar">

               {dates.map((item,index) => <AnalyticsProgressBarItem 
               
               key={index}

               date={dates[index]}

               count = {props.count[index]}
               
               />
               
               )}
               
            </ul>

        </div>   
    )
}

export default AnalyticsProgressBar;