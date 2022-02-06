import'./Header.css'
import HeaderTopLeft from './HeaderTopLeft'
import HeaderTopRight from './HeaderTopRight';


const HeaderTop = (props) =>{

     console.log(props)

    return(
        <div className={`header-top pos--dis_flex container `}>

                <div className={"header-top__logo-pos"}>
                    <HeaderTopLeft />
                </div>
        
                <div className={"header-top__nav-pos"}>
                    <HeaderTopRight active={"item-link--active"}/>   
                </div>
        </div>
        
    )
}

export default HeaderTop;