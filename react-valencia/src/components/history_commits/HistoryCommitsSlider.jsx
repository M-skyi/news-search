import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import'../../styles/HistoryCommits.css'
import HistoryCommitsSliderItem from "./HistoryCommitsSliderItem";
import { useState } from 'react'
import {gettingCommits} from '../../api/api'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
         display: "block",
          position: "absolute",
          right: "0",
          zIndex:"9999",
          height: "45px",
          width: "45px",
          borderRadius: "100%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginRight: "24px",
          background:"url('https://cdn1.iconfinder.com/data/icons/ionicons-sharp-vol-1/512/chevron-forward-circle-sharp-128.png')",
          backgroundPosition:"center",
          backgroundSize:"cover"
        }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",
       position: "absolute",
       left: "0",
       zIndex:"999",
       height: "45px",
       width: "45px",
       borderRadius: "100%",
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       marginLeft: "24px",
       background:"url('https://cdn1.iconfinder.com/data/icons/ionicons-sharp-vol-1/512/chevron-back-circle-sharp-128.png')",
       backgroundPosition:"center",
       backgroundSize:"cover",
      }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [{
        breakpoint: 1440,
        settings: {
           arrows: false,
           centerPadding: '20px',
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: false,
        }
     },
     {
        breakpoint: 1024,
        settings: {
           arrows: false,
           slidesToShow: 2,
           slidesToScroll: 2,
           infinite: false,
        }
     },
     {
        breakpoint: 768,
        settings: {
           arrows: false,
           centerPadding: '0px',
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: false,
           dots:false,
        } 
     }

  ]
    };



    let dataCommits = JSON.parse(localStorage.getItem("commitsItem"));


    return (
      <Slider {...settings} style={{ display: 'flex', height:'auto' }} className='history-slide'>

        {dataCommits.arrItemUrl.map( (item,index) => 

        <HistoryCommitsSliderItem 
        
        key = {index}

        date = {dataCommits.arrChangesDate[index]}

        name = {dataCommits.arrName[index]}

        email = {dataCommits.arrEmail[index]}

        message = {dataCommits.arrMessage[index]}

        itemUrl = {dataCommits.arrItemUrl[index]}

        imgUrl = {dataCommits.arrImgUrl[index]}

        
        /> )}

      </Slider>
    );
  }




