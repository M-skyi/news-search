import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styles from '../../styles/HistoryCommits.module.css';
import HistoryCarouselItem from './HistoryCarouselItem';

import setting from './SettingsSlider';
import { changeDate } from '../../app/main';

const HistoryCarousel = () => {
  const [itemCommits, setItemCommits] = useState([]);
  useEffect(() => {
    const dataCommits = JSON.parse(localStorage.getItem('commitsItem'));
    setItemCommits(dataCommits);
  }, []);
  return (
    <div>
      <Slider {...setting()} className={styles.historySlider}>
        {itemCommits.map((item, index) => (
          <HistoryCarouselItem
            key={index}
            date={changeDate(item.commit.author.date)}
            name={item.commit.author.name}
            email={item.commit.author.email}
            message={item.commit.message}
            itemUrl={item.html_url}
            imgUrl={item.author.avatar_url}
          />
        ))}
      </Slider>
    </div>
  );
};
export default HistoryCarousel;
