import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import'./HistoryCommits.css'

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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
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
        }
     }

  ]
    };

    return (
      <Slider {...settings} style={{ display: 'flex' }} className='history-slide'>

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




