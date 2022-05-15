import'../../styles/SearchResult.css'
import { useState } from 'react'





const SearchResultItem = (props) =>{


    return(
        <a className={"search-res-item"} href={props.url} target="_blank">
            
                <img className={"search-res-item__img"} src={props.img} alt="Img news"/>   

                <div className={"search-res-item__date"}>

                    {props.publishedAt}

                </div>

                <div className={"search-res-item__heading"}>
                     
                     {props.title}
                     
                </div>

                <div className={"search-res-item__content"}>

                  {props.description}

                 </div>

                 <div className={"search-res-item__source-content"}>

                     {props.author}

                 </div>

        </a>   
    )
}

export default SearchResultItem;