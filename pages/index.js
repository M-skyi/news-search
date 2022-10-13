import Author from '../components/Author/Author';
import HistoryCommits from '../components/HistoryCommits/HistoryCommits';
import Loader from '../components/Loader/Loader';
import Result from '../components/NewsResult/Result';
import NoFoundNews from '../components/NoFoundNews/NoFoundNews';

const Home = ({ loader, noFound, result }) => (
  <div>
    {loader && <Loader />}
    {noFound && <NoFoundNews />}
    {result && <Result />}
    <Author />
    <HistoryCommits />
  </div>

);
export default Home;
