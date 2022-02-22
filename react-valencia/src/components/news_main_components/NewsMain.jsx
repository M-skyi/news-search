
import Header from '../header_components/Header';
import SearchResultMain from '../search_res_components/SearchResultMain';
import AboutAuthorMain from '../about_author_components/AboutAuthorMain';
import HistoryCommitsMain from '../history_commits_components/HistoryCommitsMain';


 

const NewsMain = (props) => {

  return (
    <div className={"NewsMain"}>
       <Header test = {props}/>
       <SearchResultMain/>
       <AboutAuthorMain/>
       <HistoryCommitsMain/>
    </div>
  );
}

export default NewsMain;