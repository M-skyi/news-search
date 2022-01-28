 import'./Header.css'

const HeaderTopRight = () =>{
    return(
        <div className={"header-top-right"}>

                <nav className={"header-top-right__nav pos--dis_flex"}>
                    <li className={"header-top-right__item"} className={"header-top-right__item"}>
                        <a className={"header-top-right__item-link header-top-right__item-link--active"} href='/app'>Главная</a>
                    </li>
                    <li className={"header-top-right__item"}>
                        <a className={"header-top-right__item-link"} href="#">О проекте</a>
                    </li>
                </nav>
            
        </div>
        
    )
}

export default HeaderTopRight;