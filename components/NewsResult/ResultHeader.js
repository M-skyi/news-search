import Link from 'next/link';
import classNames from 'classnames';
import styles from '../../styles/NewsResult.module.css';
import { useTranslation } from 'next-i18next';

const ResultHeader = () => {
  const { t } = useTranslation('common');
  return (
    <div className={classNames(styles.header, 'container')}>
      <div className={styles.leftPart}>
        <h1 className={styles.title}>{t('search.result.title')}</h1>
      </div>
      <div className={styles.rightPart}>
        <Link href="/analytics">
          <a className={styles.link}>{t('search.result.link')}</a>
        </Link>
      </div>
    </div>
  );
};
export default ResultHeader;
