import AboutAuthorMain from './about_author_modules/AboutAuthorMain';
import './App.css';
import FooterMain from './footer_modules/FooterMain';
import Header from './header_modules/Header';
import HistoryCommitsMain from './history_commits_modules/HistoryCommitsMain';
import SearchResMain from './search_res_modules/SearchResMain';

const App = () => {
  return (
    <div className={"App"}>
      <Header/>
      <SearchResMain/>
      <AboutAuthorMain/>
      <HistoryCommitsMain/>
      <FooterMain/>
    </div>
  );
}

export default App;
