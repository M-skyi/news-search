
import { Link } from 'react-router-dom';
import './Analytics.css'; 

const Analytics = () => {
  return (
    <div className={"Analytics"}>
      Test
      <Link className={"header-top-right__item-link header-top-right__item-link--active"} to='/app'>Главная</Link >
    </div>
  );
}

export default Analytics;