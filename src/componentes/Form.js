import React,{ useEffect,useRef } from "react";
import Input from "./Input";

export default function Form(){
    // using useEffect hook for initialing the first element in the section.
    const newRef=useRef(null);

    useEffect(()=>{

       newRef.current.focus();
        //
    },[]);

    return(
        <div>
            <Input ref={newRef} type="text" placeholder="say something here" />

        </div>
    )
}
