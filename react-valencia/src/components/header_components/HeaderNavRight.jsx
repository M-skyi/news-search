 import'./Header.css'
 import { Link } from 'react-router-dom';


const HeaderNavRight = (props) =>{
    return(
        <div className={`header-top-right`}>

                <nav className={`header-top-right__nav`}>
                    <li className={"header-top-right__item"}>
                        <Link className={`header-top-right__item-link  ${props.active} ${props.className}`} to='/'>Главная</Link >
                    </li>
                    <li className={"header-top-right__item"}>
                        <a className={`header-top-right__item-link  ${props.className}`} href="#">О проекте</a>
                    </li>
                </nav>
        
        </div>
        
    )
}

export default HeaderNavRight;