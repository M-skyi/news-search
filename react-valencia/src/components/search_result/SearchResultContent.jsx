import'../../styles/SearchResult.css'
import SearchResultItem from './SearchResultItem';
import { useState} from 'react';
import {gettingNews }from '../../api/api'





    const useItem = () => {

        let dataObjNews = JSON.parse(localStorage.getItem("newsItem"));
        let lengthNews = JSON.parse(localStorage.getItem("newsDataLength"));
    

    const [itemsResult, setItemsResult] = useState(dataObjNews.arrTitle.map( item =>

        <SearchResultItem /> 
        
        ).slice(0,3))

       function removeItem() {

        let total = 0

        if (itemsResult.length > dataObjNews.arrTitle.length) {
             total = itemsResult.length - dataObjNews.arrTitle.length
        }

        return total
    }

         function setResult() {

            setItemsResult([...itemsResult,

                <SearchResultItem  />,
                <SearchResultItem  />,
                <SearchResultItem  />
                   
                ])
         } 


            if (itemsResult.length > lengthNews || itemsResult.length === lengthNews ) {
            
                itemsResult.splice(-1,removeItem())

                hideBtn()
    
            }else {

                showBtn()
            }
            
        return {itemsResult,setResult,dataObjNews};

}



        let classBtn = {
            hideButton:'',
        }


        const hideBtn = () => {
            classBtn.hideButton = "search-res-btn__hide-btn"
            
        }

        const showBtn = () => {
            classBtn.hideButton = "";
        }



const SearchResultContent = (props) =>{

    const {itemsResult,setResult,dataObjNews} = useItem();

    return(
        <div className={"search-main-content container"} >
            
            {itemsResult.map((item,index) =>

             <SearchResultItem key = {index}
                
             title = {dataObjNews.arrTitle[index]}

             description = {dataObjNews.arrDescription[index]}

             author = {dataObjNews.arrAuthor[index]}

             publishedAt = {dataObjNews.arrPublishedDate[index]}

             img = {dataObjNews.arrImg[index]}

             url = {dataObjNews.arrUrl[index]}


            />)} 

            <div className={"search-res-btn "}>
                 <button className={`search-res-btn__show-more ${classBtn.hideButton}`}  onClick={setResult} >Показать еще</button>
            </div>
        </div> 
        
        
    )
}

export default SearchResultContent;