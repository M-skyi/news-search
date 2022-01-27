import HeaderMainText from './HeaderMainText';
import HeaderMainSearch from "./HeaderMainSearch";
import'./Header.css'

const HeaderMain = () => {
    return(

            <div className={"header-main container header-main--pos "}>

                <div className={"header-main--pos"}>
                    <HeaderMainText/>
                    <HeaderMainSearch/>
                </div>
                 
            </div>
    )
}


export default HeaderMain;