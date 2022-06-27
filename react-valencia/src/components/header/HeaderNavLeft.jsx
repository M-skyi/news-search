import'../../styles/Header.css'
import { Link,useLocation,useEffect  } from 'react-router-dom';
import classNames from "classnames"

const HeaderNavLeft = (props) =>{

    let location = useLocation();

    const headerLogoClass = classNames({
        
        'header-analytic': location.pathname === "/analytics",
        'header-top-left__logo-link': location.pathname === "/"
      });

   
    return(
        <div className={`header-top-left`}>

            <div className={"header-top-left__logo "}>
                <Link className={headerLogoClass} to="/">NewsAnalyzer </Link>
            </div>

        </div>
        
    )
}

export default HeaderNavLeft;