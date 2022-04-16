import '../../styles/Analytics.css';
import AnalyticsProgressBarItem from './AnalyticsProgressBarItem';

const AnalyticsProgressBar = () =>{

    return(
        <div className={"analytics-progress-bar"}>
           
           <ul className="progress-bar">

                <AnalyticsProgressBarItem/>

            </ul>

        </div>   
    )
}

export default AnalyticsProgressBar;