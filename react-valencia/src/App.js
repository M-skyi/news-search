import './App.css';
import {Router,Route,Link, Routes} from "react-router-dom"
import FooterMain from './components/footer/FooterMain';
import Analytics from './components/analytics_main/Analytics';
import NewsMain from './components/news_main/NewsMain';

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
