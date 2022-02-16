
import AboutAuthorMain from '../about_author_modules/AboutAuthorMain';
import SearchResMain from '../search_res_modules/SearchResultMain';
import Header from '../header_modules/Header';
import HistoryCommitsMain from '../history_commits_modules/HistoryCommitsMain';

 

const NewsMain = (props) => {

  return (
    <div className={"NewsMain"}>
        <Header test = {props}/>
        <SearchResMain/>
        <AboutAuthorMain/>
        <HistoryCommitsMain/>
    </div>
  );
}

export default NewsMain;