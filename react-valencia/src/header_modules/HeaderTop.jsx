import'./Header.css'
import HeaderTopLeft from './HeaderTopLeft'
import HeaderTopRight from './HeaderTopRight';


const HeaderTop = () =>{
    return(
        <div className={"HeaderTop"}>

            <div className={"HeaderTop__logo-pos"}>
                 <HeaderTopLeft/>
            </div>
            
            <div className={"HeaderTop__nav-pos"}>
                <HeaderTopRight/>   
            </div>
            
            
        </div>
        
    )
}

export default HeaderTop;