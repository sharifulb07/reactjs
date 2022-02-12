import React from "react";
import withCounter from "../HOC/withCounter";


const ClickCounter=(props)=>{
    const {count, clickHandle}=props;
        return(
            <div>
                <button  type="button" onClick={clickHandle}>Clicked {count} times </button>
            </div>
        )
}

export default withCounter(ClickCounter);