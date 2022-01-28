
import AboutAuthorMain from '../about_author_modules/AboutAuthorMain';
import SearchResMain from './../search_res_modules/SearchResMain';
import HistoryCommitsMain from './../history_commits_modules/HistoryCommitsMain';
import Header from '../header_modules/Header';
 

const NewsMain = () => {
  return (
    <div className={"NewsMain"}>
        <Header/>
        <SearchResMain/>
        <AboutAuthorMain/>
        <HistoryCommitsMain/>
    </div>
  );
}

export default NewsMain;