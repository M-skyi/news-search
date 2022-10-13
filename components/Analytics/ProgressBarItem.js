import styles from '../../styles/Analytics.module.css';

const ProgressBarItem = ({ dateItem, itemNum }) => (
  <div className={styles.background}>
    <div className={styles.item}>
      <div className={styles.itemDate}>{dateItem}</div>
      <div className={styles.itemCounterWrapper}>
        <progress
          className={styles.itemValue}
          value={itemNum}
          max="100"
        ></progress>
        <div className={styles.itemCounter}>{itemNum}</div>
      </div>
    </div>
  </div>
);
export default ProgressBarItem;
