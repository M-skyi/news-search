import'./SearchRes.css'
import SearchResItem from './SearchResItem';

const SearchResContent = () =>{

    return(
        <div className={"search-main-content container"}>
            <SearchResItem/>
            <SearchResItem/>
            <SearchResItem/>
            <SearchResItem/>
            <SearchResItem/>
            <SearchResItem/>
        </div>   
    )
}

export default SearchResContent;