import { Link } from 'react-router-dom';
import'./SearchRes.css'



const SearchResTop = () =>{

    return(
        <div className={"search-top-content pos--dis_flex container"}>
            
            <div className={"search-top-content__text"}>
                Результаты поиска
            </div>

            <div className={"search-top-content__link"}>
                <Link className={"search-top-content__link-item"} to='/analytics'>Посмотреть аналитику</Link >    
            </div>
            
        </div>   
    )
}

export default SearchResTop;