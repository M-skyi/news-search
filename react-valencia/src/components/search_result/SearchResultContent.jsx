import'../../styles/SearchResult.css'
import SearchResultItem from './SearchResultItem';
import { useState } from 'react';







const SearchResultContent = (props) =>{

console.log(props);
    let title = [ "a","b","w","c"]


    const [itemsResult, setItemsResult] = useState([

    <SearchResultItem />,
    <SearchResultItem />,
    <SearchResultItem />
    ])

    const moreNews = () =>{
        
        setItemsResult([...itemsResult,

             <SearchResultItem />,
             <SearchResultItem />,
             <SearchResultItem />

             ])
             
    }



    return(
        <div className={"search-main-content container"} >
            {itemsResult.map((item,index) =>

             <SearchResultItem key = {index}
                
             title = {title[index]}

            />)} 

            <button onClick={moreNews}>hfghh</button>
        </div> 
        
        
    )
}

export default SearchResultContent;