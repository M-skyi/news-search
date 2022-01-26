import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";
import'./Header.css'


const Header = () =>{
    return(
        <div className={"Header"}>
             <HeaderTop/>
             <HeaderMain/>
        </div>
        
    )
}

export default Header;