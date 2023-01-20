import classNames from 'classnames';
import styles from '../../styles/Analytics.module.css';
import ProgressBar from './AnalyticsProBar';
import { currentMonth } from '../../app/main';
import { useTranslation } from 'next-i18next';

const AnalyticsContent = ({ itemNum }) => {
  const { t } = useTranslation('analytic');
  return (
    <div className={styles.background}>
      <div className={classNames('container')}>
        <h1 className={styles.headline}>{t('analytics.day')}</h1>
        <div className={styles.nav}>
          <div className={`${styles.date} ${styles.textStyle}`}>
            {t('current.month')}
            <p className={`${styles.dateItem} ${styles.textStyle}`}>
          ({currentMonth()})
            </p>
          </div>
          <div className={`${styles.navHeadline} ${styles.textStyle}`}>
            {t('number.mentions')}
          </div>
        </div>
        <ProgressBar itemNum={itemNum} />
      </div>
    </div>
  );
};

export default AnalyticsContent;
