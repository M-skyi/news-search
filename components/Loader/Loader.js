import styles from '../../styles/Loader.module.css';
import { useTranslation } from 'next-i18next';

const Loader = () => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.loader}>
      <div className={styles.circle}></div>
      <div className={styles.text}>{t('loader')}</div>
    </div>
  );
};
export default Loader;
