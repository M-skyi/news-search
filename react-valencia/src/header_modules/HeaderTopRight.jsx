 import'./Header.css'

const HeaderTopRight = () =>{
    return(
        <div className={"HeaderTopRight"}>

                <nav className={"HeaderTop__nav"}>
                    <li className={"HeaderTop__item"} className={"HeaderTop__item"}>
                        <a className={"HeaderTop__item-link HeaderTop__item-link--active"} href="#">Главная</a>
                    </li>
                    <li className={"HeaderTop__item"}>
                        <a className={"HeaderTop__item-link"} href="#">О проекте</a>
                    </li>
                </nav>
            
        </div>
        
    )
}

export default HeaderTopRight;