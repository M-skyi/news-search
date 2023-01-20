import classNames from 'classnames';
import styles from '../../styles/Author.module.css';
import { useTranslation } from 'next-i18next';

const Author = () => {
  const { t } = useTranslation('common');
  return (
    <div className={classNames(styles.content, 'container')}>
      <div className={styles.leftPart}>
        <div className={styles.img}></div>
      </div>
      <div className={styles.rightPart}>
        <h1 className={styles.headline}>{t('author.title')}</h1>
        <p className={styles.text}>
          <span className={`${styles.textFirst} ${styles.text}`}>
            {t('author.description')}
          </span>
          <span className={`${styles.textSecond} ${styles.text}`}>
            {t('author.description.second.part')}
          </span>
        </p>
      </div>
    </div>
  );
};
export default Author;
