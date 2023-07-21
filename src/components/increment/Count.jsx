import React, { useState } from 'react';



const Count = () => {
    const[count,setCount]=useState(0);

    const incrementByOne=()=>{
        setCount(s=>s+1)

    }
    
    const incrementByThree=()=>{
        setCount(s=>s+3)

    }

    const decrementByOne=()=>{
        setCount(s=>s-1)
    }
    const decrementByTwo=()=>{
        setCount(s=>s-2)
    }



  return (
    <div>
      <h1>{count}</h1>
      <button type='button'onClick={incrementByOne}>+1</button>
      <button type='button'onClick={incrementByThree}>+3</button>
      <button type='button'onClick={decrementByOne}>-1</button>
      <button type='button'onClick={decrementByTwo}>-2</button>
    </div>
  )
}

export default Count
