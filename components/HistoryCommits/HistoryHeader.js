import Link from 'next/link';
import classNames from 'classnames';
import styles from '../../styles/HistoryCommits.module.css';
import { useTranslation } from 'next-i18next';

const HistoryHeader = () => {
  const { t } = useTranslation('common');
  return (
    <div className={classNames(styles.header, 'container')}>
      <div className={styles.leftPart}>
        <h1 className={styles.headline}>{t('history.commits.title')}</h1>
      </div>
      <div className={styles.rightPart}>
        <Link href="https://github.com/M-skyi">
          <a className={styles.link}>{t('history.commits.link')}</a>
        </Link>
      </div>
    </div>
  );
};
export default HistoryHeader;
