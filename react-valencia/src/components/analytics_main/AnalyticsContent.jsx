import '../../styles/Analytics.css';
import AnalyticsProgressBar from './AnalyticsProgressBar';

 
const AnalyticsContent = (props) => {
  return (
    <div className={"analytics-bg"}>
     <div className="analytics-content container">
        <div className="analytics-content__headline">
            Аналитика по дням
        </div>
        <div className="analytics-content__main-top">
            <div className="analytics-content__date analytics-content--font ">
                <div>Дата</div>
                 <span className="analytics-content__date-item"> (август)</span>
            </div>
            <div className="analytics-content__count analytics-content--font ">
                 Кол-во упоминаний
            </div>
        </div>
        <div className="analytics-content__main">

            <span className="analytics-content__percent-item percent-item--pos">0</span>
            <span className="analytics-content__percent-item ">25</span>
            <span className="analytics-content__percent-item ">50</span>
            <span className="analytics-content__percent-item ">75</span>
            <span className="analytics-content__percent-item ">100</span>  

            <AnalyticsProgressBar/>   

            <span className="analytics-content__percent-item percent-item--pos">0</span>
            <span className="analytics-content__percent-item ">25</span>
            <span className="analytics-content__percent-item ">50</span>
            <span className="analytics-content__percent-item ">75</span>
            <span className="analytics-content__percent-item ">100</span>
            
        </div>
     </div>
    </div>
    
  );
  
}

export default AnalyticsContent;