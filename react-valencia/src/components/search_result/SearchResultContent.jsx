import'../../styles/SearchResult.css'
import SearchResultItem from './SearchResultItem';


// let newsCount = [1,2,3]
// let newsItem = newsCount.map(item => <SearchResultItem/> )


const SearchResultContent = () =>{
    return(
        <div className={"search-main-content container"}>
            {/* {newsItem} */}
            <SearchResultItem/>
            <SearchResultItem/>
            <SearchResultItem/>
        </div>   
    )
}

export default SearchResultContent;