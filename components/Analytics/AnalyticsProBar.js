import styles from '../../styles/Analytics.module.css';
import ProgressBarItem from './ProgressBarItem';
import { getDaysWeek } from '../../app/main';

const ProgressBar = ({ itemNum }) => {
  const percentItem = () => {
    const item = [];
    for (let num = 0; num <= 100; num += 25) {
      item.push(num);
    }
    return item;
  };

  return (
    <div className={styles.progressBar}>
      {percentItem().map((num, i) => (
        <span key={i} className={styles.percent}>{`${num}`}</span>
      ))}
      {getDaysWeek().map((item, i) => (
        <ProgressBarItem key={i} dateItem={item} itemNum={itemNum[i]} />
      ))}
      {percentItem().map((num, i) => (
        <span key={i} className={styles.percent}>{`${num}`}</span>
      ))}
    </div>
  );
};
export default ProgressBar;
