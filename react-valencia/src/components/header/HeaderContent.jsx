import HeaderMainText from './HeaderText';
import {HeaderMainSearch }from "./HeaderSearch";
import'../../styles/Header.css'





const HeaderContent = (props) => {

   
    return(

        <div className={"header-main container header-main--pos "}>

            <div className={"header-main--pos"}>
                <HeaderMainText/>
                <HeaderMainSearch showLoader = {props.showLoader}/>
            </div>
             
        </div>
        )



    
}


export default HeaderContent;