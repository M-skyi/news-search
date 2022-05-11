import'../../styles/SearchResult.css'
import gettingNews from '../../api/api'
import { useState } from 'react'






 let  title = [];



  export const showNews = () => {

   let stateNews =  gettingNews().then(function (item) {

    title.push(item.newsItems.arrTitle)

    

        return item.newsItems
    })

    return stateNews

  }



//   console.log(title);







const SearchResultItem = (props) =>{

console.log(props);
 
    return(
        <a className={"search-res-item"} href="#">
            
                <img className={"search-res-item__img"} src={require('../../project_img/news-img.png')} alt="Img news"/>   

                <div className={"search-res-item__date"}>
                    2 августа, 2019
                </div>

                <div className={"search-res-item__heading"}>
                     
                     {props.title}
                     
                </div>

                <div className={"search-res-item__content"}>
                    В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
                    В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
                 </div>

                 <div className={"search-res-item__source-content"}>
                     Медуза
                 </div>

        </a>   
    )
}

export default SearchResultItem;