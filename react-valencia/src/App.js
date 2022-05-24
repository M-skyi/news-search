import './App.css';
import {Route,Routes,useLocation } from "react-router-dom";
import { useState } from 'react';
import FooterMain from './components/footer/FooterMain';
import Analytics from './components/analytics_main/Analytics';
import NewsMain from './components/news_main/NewsMain';
import Header from './components/header/Header';
import Preloader from './components/preloader/Preloader';
import NoNewsFound from './components/no_news_found/no_news_found';
import SearchResultMain from './components/search_result/SearchResultMain';

const App = (props) => {

  let location = useLocation();
  const [preloader, setPreloader] = useState(false);
  const [noNewsFound, setNoNewsFound] = useState(false);
  let [searchResult, setSearchResult] = useState(false)

    const showPreloader = () => {
     
      setPreloader(true)
        
    }

    const hidePreloader = () => {
      
      setPreloader(false)
        
    }

    const showNoNewsFound = () => {
      
      setNoNewsFound(true)
        
    }

    const hideNoNewsFound = () => {
      
      setNoNewsFound(false)
        
    }

    const showSearchResult = () => {
      
      setSearchResult(true)
        
    }

    const hideSearchResult = () => {
      
      setSearchResult(false)
        
    }

    if (location.pathname === "/analytics") {
       
      searchResult = false    
  }



  return (
    <div className={"App"}>
      <Header showLoader = {showPreloader}
        hideLoader = {hidePreloader}
        showNoNewsFound = {showNoNewsFound}
        hideNoNewsFound = {hideNoNewsFound}
        showSearchResult = {showSearchResult}
        hideSearchResult = {hideSearchResult}
      />
       {preloader && <Preloader/> }
       {noNewsFound && <NoNewsFound/>}
       {searchResult && <SearchResultMain/>}
        <Routes>
            <Route path="/" element={ <NewsMain/>}/> 
            <Route path="/analytics" element={<Analytics/>}/> 
        </Routes>
        <FooterMain/>
    </div>
    
  );
}

export default App;
