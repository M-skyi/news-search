import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";
import'./Header.css'



const Header = () =>{

    return(
        <div className={"header"}>
                <hr className={"header-line"} />
                <HeaderTop/>
                <HeaderMain/>        
        </div>   
    )
}

export default Header;