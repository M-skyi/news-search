
import AboutAuthorMain from '../about_author_modules/AboutAuthorMain';
import SearchResMain from './../search_res_modules/SearchResMain';
import HistoryCommitsMain from './../history_commits_modules/HistoryCommitsMain';
import Header from '../header_modules/Header';
import FooterMain from './../footer_modules/FooterMain';
 

const NewsMain = () => {
  return (
    <div className={"NewsMain"}>
        <Header/>
        <SearchResMain/>
        <AboutAuthorMain/>
        <HistoryCommitsMain/>
        <FooterMain/>
    </div>
  );
}

export default NewsMain;