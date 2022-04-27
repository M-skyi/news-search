import'../../styles/SearchResult.css'
import SearchResContent from './SearchResultContent';
import SearchResultHeader from './SearchResultHeader';
import { useState } from 'react';







const SearchResultMain = (props) =>{

    const [isShow, setShow] = useState(false)

    return(
        <div className={"main-result"}>
            <SearchResultHeader/>
            <SearchResContent/>
            { isShow && <SearchResContent/> }
                  
            <div className={"search-res-btn "}>
                 <button className={"search-res-btn__show-more"}  onClick={() => setShow(!isShow)} >Показать еще</button>
            </div> 
            
        </div>   
    )
}

export default SearchResultMain;