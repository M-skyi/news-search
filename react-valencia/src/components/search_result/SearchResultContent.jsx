import'../../styles/SearchResult.css'
import SearchResultItem from './SearchResultItem';
import { useState} from 'react';
import gettingNews from '../../api/api'



    const useItem = () => {

    const [itemsResult, setItemsResult] = useState([

        <SearchResultItem />,
        <SearchResultItem />,
        <SearchResultItem />
        ])

       const setResult = () => 
        
        setItemsResult([...itemsResult,

         <SearchResultItem />,
         <SearchResultItem />,
         <SearchResultItem />
            
         ])

        return {itemsResult,setResult};

}





  


const SearchResultContent = (props) =>{

    const {itemsResult,setResult} = useItem();

    let dataObjNews = JSON.parse(localStorage.getItem("newsItem"));

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
                 <button className={"search-res-btn__show-more"} onClick={setResult} >Показать еще</button>
            </div>
        </div> 
        
        
    )
}

export default SearchResultContent;