import'./AboutAuthor.css'

const AboutAuthorText = () =>{

    return(
        <div className={"bout-author-text "}>
           
            <div className={"bout-author-text__headline"}>
                Об авторе
            </div>

            <div className={"bout-author-text__text"}>
                
                <p className={"about-author-text__first"}>
                     Меня зовут Алексей Михайлецкий, я начинающий Front-End разработчик . Я обладаю базовыми навыками современного фронтенда .
                </p>
                <p className={"about-author-text__second"}>
                     Основной стек техноглигий с которым я работаю это JavaScript, HTML, Css, React, Sass, Git, WordPress, БЭМ .
                </p>

               
            </div>

        </div>   
    )
}

export default AboutAuthorText;