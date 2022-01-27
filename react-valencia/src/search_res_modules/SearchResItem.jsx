import'./SearchRes.css'

const SearchResItem = () =>{

    return(
        <div className={"search-res-item"}>
            
                <img className={"search-res-item__img"} src={require('../project_img/news-img.png')} alt="Img news"/>   

                <div className={"search-res-item__date"}>
                    2 августа, 2019
                </div>

                <div className={"search-res-item__heading"}>
                     Национальное достояние – парки 
                </div>

                <div className={"search-res-item__content"}>
                    В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
                    В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
                 </div>

                 <div className={"search-res-item__source-content"}>
                     Медуза
                 </div>

        </div>   
    )
}

export default SearchResItem;