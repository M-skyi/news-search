import { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import styles from '../../styles/Header.module.css';
import { gettingNews, getInputValue } from '../../pages/api/api';

const Search = ({ headerProps }) => {
  const { t } = useTranslation('common');
  const loader = headerProps[0];
  const noNewsFound = headerProps[1];
  const searchResult = headerProps[2];
  const [topic, setTopic] = useState('');
  getInputValue(topic);
  const searchNews = (e) => {
    e.preventDefault();
    noNewsFound(false);
    if (topic.length === 0) {
      searchResult(false);
      alert(t('header.empty.string'));
      return;
    }
    if (setTopic(topic) !== topic) {
      searchResult(false);
    }
    loader(true);
    gettingNews()
      .then((item) => {
        if (item.length === 0) {
          loader(false);
          noNewsFound(true);
        } else {
          loader(false);
          searchResult(true);
        }
      })
      .catch(() => {
        alert(t('header.request.error'));
        loader(false);
      });
  };
  return (
    <div className={classNames(styles.search, 'container')}>
      <h1 className={styles.title}>{t('header.title')}</h1>
      <p className={styles.text}>
        {t('header.description')}
      </p>
      <form className={styles.form}>
        <div className={styles.wrapperInput}>
          <input
            className={styles.input}
            onChange={(event) => setTopic(event.target.value)}
            type="text"
            placeholder={t('header.input.search')}
          ></input>
          <input
            className={styles.btn}
            type="submit"
            onClick={searchNews}
            value={t('header.btn.search')}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Search;
