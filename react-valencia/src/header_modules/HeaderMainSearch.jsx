import'./Header.css'
import { useState } from 'react'
import gettingNews from '../modules_js/GetApi'


const HeaderMainSearch = (props) =>{

    const [topic, setTitle] = useState('');


    return(
        <form className={"form-search"}>
            
            <div className={"form-search__text"}>
                <input className="form-search__input-text"  onChange={event => setTitle(event.target.value)}  type="text" placeholder="Введите тему новости"></input>
            </div>
            <div className={"form-search__btn"}>
                <input className="form-search__input-btn"  type="submit" onClick={gettingNews} value="Искать"></input>
            </div>

        </form>
        
        
    )
}

export {HeaderMainSearch} ;


