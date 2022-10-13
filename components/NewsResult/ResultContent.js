import { useState } from 'react';
import classNames from 'classnames';
import styles from '../../styles/NewsResult.module.css';
import ResultContentItem from './ResultContentItem';
import { changeDate } from '../../app/main';

const useItem = () => {
  const dataObjNews = JSON.parse(localStorage.getItem('newsItem'));
  const newsData = JSON.parse(localStorage.getItem('newsData'));

  const [itemsResult, setItemsResult] = useState(
    newsData.map((item) => <ResultContentItem key={item} />).slice(0, 3),
  );

  function removeItem() {
    let total = 0;
    if (itemsResult.length > newsData.length) {
      total = itemsResult.length - newsData.length;
    }
    return total;
  }

  function setResult() {
    setItemsResult([
      ...itemsResult,
      ...newsData.map((item) => <ResultContentItem key={item} />).slice(0, 3),

    ]);
  }

  const classBtn = {
    hideButton: '',
  };
  const hideBtn = () => {
    classBtn.hideButton = `${styles.hideBtn}`;
  };
  const showBtn = () => {
    classBtn.hideButton = '';
  };

  if (
    itemsResult.length > newsData.length
    || itemsResult.length === newsData.length
  ) {
    itemsResult.splice(removeItem(), removeItem());
    hideBtn();
  } else {
    showBtn();
  }

  return {
    itemsResult, setResult, dataObjNews, classBtn,
  };
};

const ResultContent = () => {
  const {
    itemsResult, setResult, dataObjNews, classBtn,
  } = useItem();
  return (
    <div className={classNames(styles.content, 'container')}>
      {itemsResult.map((item, i) => (
        <ResultContentItem
          key={i}
          title={dataObjNews.arrTitle[i]}
          description={dataObjNews.arrDescription[i]}
          author={dataObjNews.arrAuthor[i]}
          publishedAt={changeDate(dataObjNews.arrPublishedAt[i])}
          img={dataObjNews.arrImg[i]}
          url={dataObjNews.arrUrl[i]}
        />
      ))}
      <div className={styles.showMore}>
        <button
          className={`${styles.btn} ${classBtn.hideButton}`}
          onClick={setResult}
        >
          Показать еще
        </button>
      </div>
    </div>
  );
};
export default ResultContent;
