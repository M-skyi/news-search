
import '../../styles/Analytics.css';
import AnalyticsContent from './AnalyticsContent';
import AnalyticsHeader from './AnalyticsHeader';
import HeaderNavLeft from '../header_components/HeaderNavLeft';
import HeaderNavRight from '../header_components/HeaderNavRight';
 


const Analytics = (props) => {
  return (
    <div className={"analytics"}>
      <hr className={"header-line"} />
      <div className={" bg-style container header-top "}>
      
        <div className={` header-top__logo-pos`}>
            <HeaderNavLeft className={`logo__color`}/>
        </div>

        <div className={`header-top__nav-pos`}>
            <HeaderNavRight className={`nav__color`}/>
        </div>
       
      </div>
      <AnalyticsHeader/>
      <AnalyticsContent/>
    </div>
    
  );
  
}

export default Analytics;