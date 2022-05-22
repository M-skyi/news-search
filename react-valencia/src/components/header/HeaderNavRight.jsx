 import'../../styles/Header.css'
 import { Link,useLocation } from 'react-router-dom';


const HeaderNavRight = (props) =>{


    let location = useLocation();

    let headerStyle = {
        style: "header-analytic"
    }

    if (location.pathname === "/analytics") {
        headerStyle.style = "header-analytic"
    }else{
        headerStyle.style = "header-top-left__logo-link item-link--active"
    }



    return(
        <div className={`header-top-right`}>

                <nav className={`header-top-right__nav`}>
                    <li className={"header-top-right__item"}>
                        <Link className={`${headerStyle.style}`} to='/'>Главная</Link >
                    </li>
                    <li className={"header-top-right__item"}>
                        <a className={`header-top-right__item-link `} href="#">О проекте</a>
                    </li>
                </nav>
        
        </div>
        
    )
}

export default HeaderNavRight;