import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import'../../styles/HistoryCommits.css'
import HistoryCommitsSliderItem from "./HistoryCommitsSliderItem";
import sliderOptions from "./SettingSlider";
import{changeDate} from "../../app/main"




const HistorySlider = () => {

    let dataCommits = JSON.parse(localStorage.getItem("commitsItem"));

    return (
      <Slider {...sliderOptions()} style={{ display: 'flex', height:'auto' }} className='history-slide'>

        {dataCommits.map( (item,index) => 

        <HistoryCommitsSliderItem 
        
        key = {index}

        date = {changeDate(item.commit.author.date)}

        name = {item.commit.author.name}

        email = {item.commit.author.email}

        message = {item.commit.message}

        itemUrl = {item.html_url}

        imgUrl = {item.author.avatar_url}

        
        /> )}

      </Slider>
    );
  }



export default HistorySlider;
