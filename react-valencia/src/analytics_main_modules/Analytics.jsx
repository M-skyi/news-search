
import { Link } from 'react-router-dom';
import HeaderTop from '../header_modules/HeaderTop';
import './Analytics.css';
 

const Analytics = () => {
  return (
    <div className={"Analytics"}>

      <div className={"test"}>
      <HeaderTop/>
      </div>
      {/* <HeaderTop/> */}
      Test
      <Link className={"header-top-right__item-link header-top-right__item-link--active"} to='/'>Главная</Link >
    </div>
  );
}

export default Analytics;