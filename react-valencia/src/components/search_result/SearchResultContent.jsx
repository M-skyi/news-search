import'../../styles/SearchResult.css'
import SearchResultItem from './SearchResultItem';




export function showNewsEl () {

    let newsCount = [1,2,3]
    let newsItem = newsCount.map(item => <SearchResultItem key={item.toString()}/> );

    return newsItem 
}

const SearchResultContent = () =>{
    return(
        <div className={"search-main-content container"} >
            {showNewsEl()} 
        </div>   
    )
}

export default SearchResultContent;