import'./Header.css'
import HeaderTopLeft from './HeaderTopLeft'
import HeaderTopRight from './HeaderTopRight';


const HeaderTop = () =>{
    return(
        <div className={"header-top pos--dis_flex container "}>

                <div className={"header-top__logo-pos"}>
                    <HeaderTopLeft/>
                </div>
                
                <div className={"header-top__nav-pos"}>
                    <HeaderTopRight/>   
                </div>

        </div>
        
    )
}

export default HeaderTop;