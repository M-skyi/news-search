
import Header from '../header/Header';
import SearchResultMain from '../search_result/SearchResultMain';
import AboutAuthorMain from '../about_author/AboutAuthorMain';
import HistoryCommitsMain from '../history_commits/HistoryCommitsMain';
import Preloader from '../preloader/Preloader';
import NoNewsFound from '../no_news_found/no_news_found';
import { useState } from 'react';





const NewsMain = (props) => {

  const [preloader, setPreloader] = useState(false);
  const [noNewsFound, setNoNewsFound] = useState(false);
  const [searchResult, setSearchResult] = useState(false)

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



  return (
    <div className={"NewsMain"}>
       <Header  showLoader = {showPreloader}
        hideLoader = {hidePreloader}
        showNoNewsFound = {showNoNewsFound}
        hideNoNewsFound = {hideNoNewsFound}
        showSearchResult = {showSearchResult}
        hideSearchResult = {hideSearchResult}
        />
       {preloader && <Preloader/> }
       {noNewsFound && <NoNewsFound/> }
       {searchResult &&<SearchResultMain/>}
       <AboutAuthorMain/>
       <HistoryCommitsMain/>
    </div>
  );
}

export default NewsMain;