import'./Header.css'

const HeaderMainSearch = () =>{
    return(
        
        <form className={"form-search pos--dis_flex"}>
            
            <div className={"form-search__text"}>
                <input class="form-search__input-text" type="text" placeholder="Введите тему новости"></input>
            </div>
            <div className={"form-search__btn"}>
                <input class="form-search__input-btn" type="submit" value="Искать"></input>
            </div>

        </form>
        
        
    )
}

export default HeaderMainSearch;
