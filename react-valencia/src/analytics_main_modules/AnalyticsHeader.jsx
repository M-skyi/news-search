
import './Analytics.css';
import { Link } from 'react-router-dom';
 


const AnalyticsHeader = (props) => {
  return (
    <div className={"analytics-top container"}>
        <ul className={"bread-crumbs"}>
                <li><Link className={"bread-crumbs__link"} to='/'>Главная</Link></li>
                <li className={"bread-crumbs__current-page"}> / Аналитика</li>
        </ul>
        <div className={"topic-request"}>
            Вы спросили: <span className={"topic-request__text"}>«Путешествия»</span>
        </div>
        <div className="count">
            <div className="count__news">
               Новостей за неделю: <span className="count__news-item count-font--weight">34 324</span>
             </div>
            <div className="count__headline">
               Упоминаний в загаловках: <span className="count__headline-item count-font--weight">235</span>
            </div>
        </div>
    </div>
    
  );
  
} 

export default AnalyticsHeader;