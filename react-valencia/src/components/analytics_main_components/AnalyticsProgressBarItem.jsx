import '../../styles/Analytics.css';

const AnalyticsProgressBarItem = () =>{

    return(
        <div className={"analytics-progress-bar-item"}>
           
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

        </div>   
    )
}

export default AnalyticsProgressBarItem;