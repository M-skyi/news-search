import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/NewsResult.module.css';
import { changeImageItem, changeAuthorItem } from '../../app/main';

const ResultContentItem = ({
  title,
  description,
  author,
  publishedAt,
  img,
  url,
}) => {
  const [authorItem, setAuthor] = useState(author);
  const [imageItem, setImage] = useState(img);
  return (
    <div className={styles.resultContentItem}>
      <Link href={url}>
        <a className={styles.item} href={url}>
          <div className={styles.wrapperImg}>
            <img
              className={styles.img}
              src={changeImageItem(imageItem, setImage)}
              alt="News images"
            />
          </div>
          <div className={styles.wrapperText}>
            <span className={styles.date}>{publishedAt}</span>
            <h1 className={styles.headline}>{title}</h1>
            <p className={styles.text}>{description}</p>
            <span className={styles.source}>
              {changeAuthorItem(authorItem, setAuthor)}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default ResultContentItem;
