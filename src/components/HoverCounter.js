import React from "react";



export default function HoverCounter ({count, incrementCount}){
    
  
        return (
            <div>
                <h1 onMouseOver={incrementCount}>Clicked {count}
                 times </h1>
            </div>
        );


    }








   


