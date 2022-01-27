import'./HistoryCommits.css'

const HistoryCommitsTop = () =>{

    return(
       <div className={"history-commits-top"}>
          <div className={"history-commits-top__headline"}>
                История коммитов из GitHub
          </div>
          <div className={"history-commits-top__link"}>
                <a className={"history-commits-top__link-item"} href="#">Открыть в  Github</a>
          </div>
       </div> 
    )
}

export default HistoryCommitsTop;