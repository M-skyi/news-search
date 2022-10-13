import Link from 'next/link';
import classNames from 'classnames';
import styles from '../../styles/HistoryCommits.module.css';

const HistoryHeader = () => (
  <div className={classNames(styles.header, 'container')}>
    <div className={styles.leftPart}>
      <h1 className={styles.headline}>История коммитов из GitHub</h1>
    </div>
    <div className={styles.rightPart}>
      <Link href="https://github.com/M-skyi">
        <a className={styles.link}>Открыть в Github</a>
      </Link>
    </div>
  </div>
);
export default HistoryHeader;
