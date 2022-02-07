import './Analytics.css';

 
const AnalyticsMain = (props) => {
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

            <ul className="progress-bar">

               <li className="progress-bar__item">
                   <div className="progress-bar__date">19, пн</div>
                   <progress className="progress-bar__value" value="25" max="100">Текст </progress>
                   <div className="progress-bar__counter">25</div>
               </li>
               <li className="progress-bar__item">
                   <div className="progress-bar__date">20, вт</div>
                   <progress className="progress-bar__value"  value="50" max="100"></progress>
                   <div className="progress-bar__counter">50</div>
               </li>
               <li className="progress-bar__item">
                   <div className="progress-bar__date">21, ср</div>
                   <progress className="progress-bar__value" value="75" max="100">Текст </progress>
                   <div className="progress-bar__counter">75</div>
               </li>
               <li className="progress-bar__item">
                   <div className="progress-bar__date">22, чт</div>
                   <progress className="progress-bar__value" value="100" max="100">Текст </progress>
                   <div className="progress-bar__counter">100</div>
               </li>
               <li className="progress-bar__item">
                   <div className="progress-bar__date">23, пт</div>
                   <progress className="progress-bar__value" value="25" max="100">Текст </progress>
                   <div className="progress-bar__counter">25</div>
               </li>
               <li className="progress-bar__item">
                   <div className="progress-bar__date">24, сб</div>
                   <progress className="progress-bar__value" value="50" max="100">Текст </progress>
                   <div className="progress-bar__counter">50</div>
               </li>
               <li className="progress-bar__item">
                   <div className="progress-bar__date">25, вс</div>
                   <progress className="progress-bar__value" value="75" max="100">Текст </progress>
                   <div className="progress-bar__counter">75</div>
               </li>

            </ul>

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

export default AnalyticsMain;