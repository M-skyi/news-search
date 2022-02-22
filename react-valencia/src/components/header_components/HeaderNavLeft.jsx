import'./Header.css'
import { Link } from 'react-router-dom';

const HeaderNavLeft = (props) =>{

    return(
        <div className={`header-top-left`}>

            <div className={"header-top-left__logo "}>
                <Link className={`header-top-left__logo-link ${props.className}`} to="/">NewsAnalyzer </Link>
            </div>

        </div>
        
    )
}

export default HeaderNavLeft;