import'../../styles/SearchResult.css'
import SearchResultItem from './SearchResultItem';
import { useState } from 'react';



const SearchResultContent = () =>{

    const [itemsResult, setShow] = useState([1,2,3])

    return(
        <div className={"search-main-content container"} >
            {itemsResult.map((item,index) => <SearchResultItem key={index}/>)}  
        </div>   
    )
}

export default SearchResultContent;