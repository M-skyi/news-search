import HeaderContent from "./HeaderContent";
import HeaderNav from "./HeaderNav";
import'../../styles/Header.css'
import { Link, useLocation } from 'react-router-dom';





const Header = (props) =>{

    let location = useLocation();
    let headerContent = true;

    let classHeader = {
        headerAnalytic:'',
        headerMain:''
    }

    function headerAnalytic() {
        classHeader.headerAnalytic = "header-analytic"
        classHeader.headerMain = ""
    }

    function headerMain() {
        classHeader.headerMain = "header"
        classHeader.headerAnalytic = ""
    }

    if (location.pathname === "/analytics") {
        headerContent = false 
        headerAnalytic()     
    }else{
        headerMain() 
    }

    return(
        <div className={`${classHeader.headerMain} ${classHeader.headerAnalytic}`}>
                <hr className={"header-line"} />
                <HeaderNav/>
                { headerContent &&  <HeaderContent  showLoader = {props.showLoader}
                 hideLoader = {props.hideLoader}
                 showNoNewsFound = {props.showNoNewsFound}
                 hideNoNewsFound = {props.hideNoNewsFound}
                 showSearchResult = {props.showSearchResult}
                 hideSearchResult = {props.hideSearchResult}
                 /> }                           
        </div>   
    )

}

export default Header;