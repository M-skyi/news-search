import Link from 'next/link';
import classNames from 'classnames';
import styles from '../../styles/NewsResult.module.css';

const ResultHeader = () => (
  <div className={classNames(styles.header, 'container')}>
    <div className={styles.leftPart}>
      <h1 className={styles.title}>Результаты поиска</h1>
    </div>
    <div className={styles.rightPart}>
      <Link href="/analytics">
        <a className={styles.link}>Посмотреть аналитику</a>
      </Link>
    </div>
  </div>
);
export default ResultHeader;
