import HeaderContent from "./HeaderContent";
import HeaderNav from "./HeaderNav";
import'../../styles/Header.css'
import { Link, useLocation } from 'react-router-dom';


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


const Header = ({
    showLoader,
    hideLoader,
    showNoNewsFound,
    hideNoNewsFound,
    showSearchResult,
    hideSearchResult,
    loader}) =>{

    let location = useLocation();
    let headerContent = true;


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
                { headerContent &&  <HeaderContent  showLoader = {showLoader}
                 hideLoader = {hideLoader}
                 showNoNewsFound = {showNoNewsFound}
                 hideNoNewsFound = {hideNoNewsFound}
                 showSearchResult = {showSearchResult}
                 hideSearchResult = {hideSearchResult}
                 loaderChange = {loader}
                 /> }                           
        </div>   
    )

}

export default Header;