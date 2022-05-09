import'../../styles/Header.css'
import { useState } from 'react'
import gettingNews from '../../api/api'
import {getInputValue} from '../../api/api'




  
 


const HeaderMainSearch = (props) =>{

 
    const [topic, setTitle] = useState('');

    getInputValue(topic)

    const showLoader = props.showLoader;
    const hideLoader = props.hideLoader;
    const showNoNewsFound = props.showNoNewsFound;
    const hideNoNewsFound = props.hideNoNewsFound;
    const showSearchResult = props.showSearchResult;


    const getNews = (e) => {

        e.preventDefault();

        hideNoNewsFound();
        
        if (topic.length === 0) {

            alert("«Нужно ввести ключевое слово»");
            return;
        }

        showLoader();

        gettingNews().then(function (news) {
            
            if (news.length  === 0) {
                
                hideLoader();
                showNoNewsFound(); 

            }else{
                hideLoader();
                showSearchResult();
            }
    
          }).catch((error) => {
            alert("«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»");
            hideLoader();
         })

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


