import '../../styles/Analytics.css';
import AnalyticsProgressBarItem from './AnalyticsProgressBarItem';
import { useState } from 'react'


function getDate() {

    let item = []

    let dateCurrent = new Date();


    for (let i = 0; i < 7; i++) {

               let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

               let tempDate = new Date();
               tempDate.setDate(dateCurrent.getDate()-i);
               
               let str = tempDate.getDate() + ", " + days[tempDate.getDay()]; 
               
               item.push(str);
        
    }

    item.reverse()

    return item

}

const AnalyticsProgressBar = ({count}) =>{


    return(
        <div className={"analytics-progress-bar"}>
           
           <ul className="progress-bar">

               {getDate().map((item,i) => <AnalyticsProgressBarItem 
               
               key={i}

               date={item}

               count = {count[i]}
               
               />)}
               
            </ul>

        </div>   
    )
}

export default AnalyticsProgressBar;