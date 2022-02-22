import './App.css';
import {Router,Route,Link, Routes} from "react-router-dom"
import FooterMain from './components/footer_components/FooterMain';
import Analytics from './components/analytics_main_components/Analytics';
import NewsMain from './components/news_main_components/NewsMain';

const App = (props) => {
  return (
    <div className={"App"}>
        <Routes>
            <Route path="/" element={ <NewsMain test = {props} />}/> 
            <Route path="/analytics" element={<Analytics/>}/> 
        </Routes>
        <FooterMain/>
    </div>
    
  );
}

export default App;
