import'../../styles/SearchResult.css'
import { useState } from 'react'
import noImg from '../../project_img/noimage.png'





const SearchResultItem = ({url,publishedAt,title,description,author,img}) =>{



    const [authorItem, setAuthor] = useState(author);
    const [image, setImage] = useState(img);

    const changeAuthorItem = () => {

        if (authorItem === null || authorItem === "" ) {

            setAuthor("Автор не указан")      
        }

        return authorItem
    }
    
    
    const changeImageItem = () => {

        if (image === null) {

            setImage(noImg) 

        }else{
            const checkImgSrc = src => {
                const img = new Image();
                img.onerror = function () { 
                   if (img.onerror) {
                      setImage(noImg) 
                   }
                 }
                img.src = src;
              }

              checkImgSrc(image)
        }

        return image
    }


    return(
        <a className={`search-res-item `} href={url} target="_blank">
            
                <img className={"search-res-item__img"} src={changeImageItem()} alt="Img news"/>   

                <div className={"search-res-item__date"}>

                    {publishedAt}

                </div>

                <div className={"search-res-item__heading"}>
                     
                     {title}
                     
                </div>

                <div className={"search-res-item__content"}>

                  {description}

                 </div>

                 <div className={"search-res-item__source-content"}>

                     {changeAuthorItem ()}

                 </div>

        </a>   
    )
}

export default SearchResultItem;