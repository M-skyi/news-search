import'./SearchRes.css'
import SearchResBtn from './SearchResBtn';
import SearchResContent from './SearchResContent';
import SearchResTop from './SearchResTop';


const SearchResMain = () =>{

    return(
        <div className={"main-result"}>
            <SearchResTop/>
            <SearchResContent/>
            <SearchResBtn/>
            
        </div>   
    )
}

export default SearchResMain;