import React from "react";
import withCounter from "../HOC/withCounter";


const HoverCounter=(props)=>{
    const {count, clickHandle}=props;
        return(
            <div>
                <h1  onMouseOver={clickHandle}>Hover here  {count} times </h1>
            </div>
        )
}

export default withCounter(HoverCounter);