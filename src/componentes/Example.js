import React,{useState, useEffect} from "react";



export default function Example(){

    const [count, setCount]=useState(0);

    useEffect(()=>{
        document.title=`You have clicked ${count} times `;
    })

    return(
        <div>
            <p> you have have clikecd {count} times </p>

            <button onClick={()=>setCount(count+1)}>click me </button>
        </div>
    )
}