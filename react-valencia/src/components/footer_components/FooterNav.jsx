import'../../styles/Footer.css'
import { Link } from 'react-router-dom';
const FooterNav = () =>{

    return(
       <div className={"footer-nav"}>
           
               <Link className={"footer-nav__item"} to="/">Главная</Link>
               <a className={"footer-nav__item"} href="#">О проекте</a>
               <a className={"footer-nav__item"} href="#">Valencia.JS</a>
       </div> 
    )
}

export default FooterNav;