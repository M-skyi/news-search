import'./SearchResult.css'
import SearchResContent from './SearchResultContent';
import SearchResultHeader from './SearchResultHeader';


const SearchResultMain = () =>{

    return(
        <div className={"main-result"}>
            <SearchResultHeader/>
            <SearchResContent/>
            <div className={"search-res-btn "}>
                 <button className={"search-res-btn__show-more"}>Показать еще</button>
            </div> 
            
        </div>   
    )
}

export default SearchResultMain;