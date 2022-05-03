import HeaderContent from "./HeaderContent";
import HeaderNav from "./HeaderNav";
import'../../styles/Header.css'



const Header = (props) =>{

    return(
        <div className={"header"}>
                <hr className={"header-line"} />
                <HeaderNav/>
                <HeaderContent  showLoader = {props.showLoader}/>   
        </div>   
    )
}

export default Header;