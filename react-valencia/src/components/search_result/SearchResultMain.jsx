import'../../styles/SearchResult.css'
import SearchResContent from './SearchResultContent';
import SearchResultHeader from './SearchResultHeader';
import { useState} from 'react';








const SearchResultMain = (props) =>{

    const [itemResult, setItemsResult] = useState([
        <SearchResContent  />,
        
    ])

    const moreNews = () =>{
        
        setItemsResult([...itemResult,
             <SearchResContent />,
             ])

    }


    return(
        <div className={"main-result"} >
            <SearchResultHeader/>
            
            {itemResult.map((item, index )  => <SearchResContent key={index} /> )}  

            <div className={"search-res-btn "}>
                 <button className={"search-res-btn__show-more"}  onClick={moreNews} >Показать еще</button>
            </div> 
            
        </div>   
    )
}

export default SearchResultMain;