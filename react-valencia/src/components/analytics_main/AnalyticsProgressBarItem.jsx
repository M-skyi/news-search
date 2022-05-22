import '../../styles/Analytics.css';


const AnalyticsProgressBarItem = (props) =>{

    return(
        <div className={"analytics-progress-bar-item"}>
           <li className="progress-bar__item">
                    <div className="progress-bar__date">{props.date}</div>
                    <progress className="progress-bar__value" value={props.count} max="100"></progress>
                    <div className="progress-bar__counter">{props.count}</div>
                </li>
               
        </div>   
    )
}

export default AnalyticsProgressBarItem;