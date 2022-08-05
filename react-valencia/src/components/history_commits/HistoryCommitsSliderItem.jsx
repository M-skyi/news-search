import'../../styles/HistoryCommits.css'


const HistoryCommitsSliderItem = ({itemUrl,date,imgUrl,name,email,message}) =>{

    return(
       <div >
         <a className='history-slide__item' href = {itemUrl} target="_blank">

             <div className="history-slide__date">{date}</div>

              <div className="history-slide__author">

                 <img className="history-slide__img" src = {imgUrl} alt="" />

                 <div className="history-slide__name-email">

                     <div className="history-slide__name">{name}</div>

                     <div className="history-slide__email">{email}</div>

                 </div>

             </div>

             <div className="history-slide__text">
                 
                    {message}
            </div>
          </a>
      </div> 
    )
}

export default HistoryCommitsSliderItem;