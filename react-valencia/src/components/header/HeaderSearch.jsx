import'../../styles/Header.css'
import { useState } from 'react'
import gettingNews from '../../api/api'
import {getInputValue} from '../../api/api'
// import { showPreloader} from '../news_main/NewsMain'



  
 


const HeaderMainSearch = (props) =>{


 
    const [topic, setTitle] = useState('');

    getInputValue(topic)

    const showLoader = props.showLoader;

    const getNews = (e) => {
        e.preventDefault()
        showLoader()

        if (topic.length === 0) {

            alert("«Нужно ввести ключевое слово»")

        }else(gettingNews())

    } 

    
    return(
        <form className={"form-search"}>
            
            <div className={"form-search__text"}>
                <input className="form-search__input-text" onChange={event => setTitle(event.target.value)} value={topic}   type="text" placeholder="Введите тему новости"></input>
            </div>
            <div className={"form-search__btn"}>
                <input className="form-search__input-btn" type="submit" onClick={getNews}  value="Искать"></input>
            </div>

        </form>
        
        
    )
}

export {HeaderMainSearch} ;


