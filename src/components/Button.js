import React from "react";

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        const {change:currentChange, locale:currentLocale}=this.props;
        // eslint-disable-next-line no-unused-vars
        const {change:nextChange, locale:nextLocale}=nextProps;

        if(currentChange===nextChange && nextLocale===currentLocale){
            return false;
        }
        return true;

    }


    render(){

        
        const {change,locale, show }=this.props;

        return(
          <div>

            <button type="button" onClick={()=>change(locale)}>
               { locale==='bn-BD'? 'change Clock' : 'ঘড়ি ব্যবহার' }
            </button>
            {show && <h1>Hello man </h1>}
          </div> 

              
        )
    }
}


export default Button;