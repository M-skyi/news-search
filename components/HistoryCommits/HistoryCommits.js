import HistoryHeader from './HistoryHeader';
import styles from '../../styles/HistoryCommits.module.css';
import HistoryCarousel from './HistoryCarousel';

const HistoryCommits = () => (
  <div className={styles.commitsWrapper}>
    <HistoryHeader />
    <HistoryCarousel />
  </div>
);
export default HistoryCommits;
