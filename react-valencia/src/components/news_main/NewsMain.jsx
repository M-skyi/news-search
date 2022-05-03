
import Header from '../header/Header';
import SearchResultMain from '../search_result/SearchResultMain';
import AboutAuthorMain from '../about_author/AboutAuthorMain';
import HistoryCommitsMain from '../history_commits/HistoryCommitsMain';
import Preloader from '../preloader/Preloader';
import NoNewsFound from '../no_news_found/no_news_found';
import { useState } from 'react';







const NewsMain = (props) => {

  const [preloader, setPreloader] = useState(false)

    const showPreloader = (e) => {
      setPreloader(!preloader)
    }

  
 
  return (
    <div className={"NewsMain"}>
       <Header  showLoader = {showPreloader}/>

       {preloader && <Preloader />}
      
       <NoNewsFound/>
       <SearchResultMain/>
       <AboutAuthorMain/>
       <HistoryCommitsMain/>
    </div>
  );
}

export default NewsMain;