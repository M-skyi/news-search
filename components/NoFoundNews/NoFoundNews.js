import styles from '../../styles/NoFoundNews.module.css';
import { useTranslation } from 'next-i18next';

const NoFoundNews = () => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}></div>
      <div className={styles.headline}>{t('no.found.title')}</div>
      <div className={styles.text}>{t('no.found.description')}</div>
    </div>
  );
};
export default NoFoundNews;
