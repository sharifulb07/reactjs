import React,{useEffect,useState,useRef} from 'react'

export default function Time (){
    const [date,setDate]=useState(new Date());
    const buttonRef=useRef();


   const  tick=()=>{
        setDate(new Date());
    }

    useEffect(()=>{
        buttonRef.current=setInterval(tick,1000);

        return ()=>{clearInterval(buttonRef.current)};
    })

    return(

        <div>
            <p>Time : {date.toLocaleTimeString()} </p>
            <button type='button' onClick={()=>{clearInterval(buttonRef.current)}}>CleanUp </button>
        </div>


    ) 
    
}