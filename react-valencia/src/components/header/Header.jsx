import HeaderContent from "./HeaderContent";
import HeaderNav from "./HeaderNav";
import'../../styles/Header.css'



const Header = (props) =>{

    return(
        <div className={"header"}>
                <hr className={"header-line"} />
                <HeaderNav/>
                <HeaderContent  showLoader = {props.showLoader}
                 hideLoader = {props.hideLoader}
                 showNoNewsFound = {props.showNoNewsFound}
                 hideNoNewsFound = {props.hideNoNewsFound}
                 showSearchResult = {props.showSearchResult}
                 />   
        </div>   
    )
}

export default Header;