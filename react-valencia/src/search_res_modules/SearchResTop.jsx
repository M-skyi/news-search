import'./SearchRes.css'

const SearchResTop = () =>{

    return(
        <div className={"search-top-content pos--dis_flex container"}>
            
            <div className={"search-top-content__text"}>
                Результаты поиска
            </div>

            <div className={"search-top-content__link"}>
                <a className={"search-top-content__link-item"} href="#">Посмотреть аналитику </a>
            </div>
                
        </div>   
    )
}

export default SearchResTop;