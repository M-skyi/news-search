
import Header from '../header/Header';
import SearchResultMain from '../search_result/SearchResultMain';
import AboutAuthorMain from '../about_author/AboutAuthorMain';
import HistoryCommitsMain from '../history_commits/HistoryCommitsMain';
import Preloader from '../preloader/Preloader';
import NoNewsFound from '../no_news_found/no_news_found';


 

const NewsMain = (props) => {
  return (
    <div className={"NewsMain"}>
       <Header test = {props}/>
       <Preloader/>
       <NoNewsFound/>
       <SearchResultMain/>
       <AboutAuthorMain/>
       <HistoryCommitsMain/>
    </div>
  );
}

export default NewsMain;