import'../../styles/Header.css'
import { Link,useLocation,useEffect  } from 'react-router-dom';


const HeaderNavLeft = (props) =>{

    let location = useLocation();

    let headerStyle = {
        style: "header-analytic"
    }

    if (location.pathname === "/analytics") {
        headerStyle.style = "header-analytic"
    }else{
        headerStyle.style = "header-top-left__logo-link"
    }

   
    return(
        <div className={`header-top-left`}>

            <div className={"header-top-left__logo "}>
                <Link className={`${headerStyle.style}`} to="/">NewsAnalyzer </Link>
            </div>

        </div>
        
    )
}

export default HeaderNavLeft;