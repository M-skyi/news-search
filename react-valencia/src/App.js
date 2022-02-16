import './App.css';
import FooterMain from './footer_modules/FooterMain';
import {Router,Route,Link, Routes} from "react-router-dom"
import Analytics from './analytics_main_modules/Analytics';
import NewsMain from './news_main_modules/NewsMain';

const App = (props) => {
  return (
    <div className={"App"}>
        <Routes>
            <Route path="/" element={<NewsMain test = {props}/>}/> 
            <Route path="/analytics" element={<Analytics/>}/> 
        </Routes>
        <FooterMain/>
    </div>
    
  );
}

export default App;
