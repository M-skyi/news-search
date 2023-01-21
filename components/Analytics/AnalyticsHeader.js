import Link from 'next/link';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from '../../styles/Analytics.module.css';
import { useTranslation } from 'next-i18next';

const AnalyticsHeader = ({ topic, totalCount, totalRes }) => {
  const [totalChanges, setTotalChanges] = useState('');
  const countResult = totalRes.toString();
  const totalLength = countResult.length;
  const { t } = useTranslation('analytic');

  useEffect(() => {
    if (totalLength > 4) {
      const stringCount = `${countResult.slice(0, 2)} ${countResult.slice(
        2,
        5,
      )}`;
      setTotalChanges(stringCount);
    } else if (totalLength === 4) {
      const stringCount = `${countResult.slice(0, 1)} ${countResult.slice(
        1,
        5,
      )}`;
      setTotalChanges(stringCount);
    } else {
      setTotalChanges(totalRes);
    }
  }, [totalRes, totalLength, countResult]);
  return (
    <div className={classNames(styles.header, styles.analyticsWrapper, 'container')}>
      <div className={styles.breadCrumbs}>
        <Link href="/">
          <a className={styles.link}>{t('link.main.page')}</a>
        </Link>
        <span className={styles.currentPage}>{t('link.current.page')}</span>
      </div>
      <div className={styles.requestNews}>
        <p className={styles.requestTopic}>
          {t('topic.request')}
          <span className={styles.requestTopic}>«{topic}»</span>
        </p>
        <div className={styles.dataWrapper}>
          <p className={styles.requestData}>
            {t('news.week')}
            <span className={styles.requestDataItem}> {totalChanges}</span>
          </p>
          <p className={styles.requestData}>
            {t('mentions.headlines')}
            <span className={styles.requestDataItem}> {totalCount()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AnalyticsHeader;
