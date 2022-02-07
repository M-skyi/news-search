import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import'./HistoryCommits.css'

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
    };
    return (
      <Slider {...settings} className='history-slide'>

          <a className='history-slide__item' href="">
             <div className="history-slide__date">14 августа, 2019</div>
              <div className="history-slide__author">

                 <img className="history-slide__img" src={require('../project_img/user1.png')} alt="" />

                 <div className="history-slide__name-email">

                     <div className="history-slide__name">Антон Долинин</div>

                     <div className="history-slide__email">anton@yandex.ru</div>

                 </div>

             </div>

             <div className="history-slide__text">
                 
                    You can install this plugin directly from NetBeans Plugin Portal: in NetBeans, open   Tools 
                    Plugins  Available plugins   and find and install Emmet plugin.
            </div>
          </a>
          <a className='history-slide__item' href="">
             <div className="history-slide__date">14 августа, 2019</div>
              <div className="history-slide__author">

                 <img className="history-slide__img" src={require('../project_img/user.png')} alt="" />

                 <div className="history-slide__name-email">

                     <div className="history-slide__name">Мария Фёдорова</div>

                     <div className="history-slide__email">mariiifed@yandex.ru</div>

                 </div>

             </div>

             <div className="history-slide__text">
                 
                    You can install this plugin directly from NetBeans Plugin Portal: in NetBeans, open   Tools 
                    Plugins  Available plugins   and find and install Emmet plugin.
            </div>
          </a>
          <a className='history-slide__item' href="">
             <div className="history-slide__date">14 августа, 2019</div>
              <div className="history-slide__author">

                 <img className="history-slide__img" src={require('../project_img/user1.png')} alt="" />

                 <div className="history-slide__name-email">

                     <div className="history-slide__name">Антон Долинин</div>

                     <div className="history-slide__email">anton@yandex.ru</div>

                 </div>

             </div>

             <div className="history-slide__text">
                 
                    You can install this plugin directly from NetBeans Plugin Portal: in NetBeans, open   Tools 
                    Plugins  Available plugins   and find and install Emmet plugin.
            </div>
          </a>
          <a className='history-slide__item' href="">
             <div className="history-slide__date">14 августа, 2019</div>
              <div className="history-slide__author">

                 <img className="history-slide__img" src={require('../project_img/user.png')} alt="" />

                 <div className="history-slide__name-email">

                     <div className="history-slide__name">Мария Фёдорова</div>

                     <div className="history-slide__email">mariiifed@yandex.ru</div>

                 </div>

             </div>

             <div className="history-slide__text">
                 
                    You can install this plugin directly from NetBeans Plugin Portal: in NetBeans, open   Tools 
                    Plugins  Available plugins   and find and install Emmet plugin.
            </div>
          </a>
          <a className='history-slide__item' href="">
             <div className="history-slide__date">14 августа, 2019</div>
              <div className="history-slide__author">

                 <img className="history-slide__img" src={require('../project_img/user1.png')} alt="" />

                 <div className="history-slide__name-email">

                     <div className="history-slide__name">Антон Долинин</div>

                     <div className="history-slide__email">anton@yandex.ru</div>

                 </div>

             </div>

             <div className="history-slide__text">
                 
                    You can install this plugin directly from NetBeans Plugin Portal: in NetBeans, open   Tools 
                    Plugins  Available plugins   and find and install Emmet plugin.
            </div>
          </a>
    
      </Slider>
    );
  }

