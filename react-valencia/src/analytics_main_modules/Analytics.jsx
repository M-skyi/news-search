
import FooterMain from '../footer_modules/FooterMain';
import './Analytics.css';
import HeaderTopLeft from './../header_modules/HeaderTopLeft';
import HeaderTopRight from './../header_modules/HeaderTopRight';
import AnalyticsTop from './AnalyticsTop';
import AnalyticsMain from './AnalyticsMain';
 


const Analytics = (props) => {
  return (
    <div className={"analytics"}>
      <hr className={"header-line"} />
      <div className={" bg-style container header-top pos--dis_flex"}>
      
        <div className={` header-top__logo-pos`}>
            <HeaderTopLeft className={`logo__color`}/>
        </div>

        <div className={`header-top__nav-pos`}>
            <HeaderTopRight className={`nav__color`}/>
        </div>
       
      </div>
      <AnalyticsTop/>
      <AnalyticsMain/>
      <FooterMain/>
    </div>
    
  );
  
}

export default Analytics;