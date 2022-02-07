import'./HistoryCommits.css'
import HistoryCommitsTop from './HistoryCommitsTop';
import HistoryCommitsSlider from './HistoryCommitsSlider';

const HistoryCommitsMain = () =>{

    return(
       <div className={"history-commits-main"}>

           <div className={"container"}>
                <HistoryCommitsTop/>
           </div>
                <HistoryCommitsSlider/>

       </div> 
    )
}

export default HistoryCommitsMain;