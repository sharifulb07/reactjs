import React , {useState} from 'react'

export default function Example() {
    const [count, setCount]=useState(()=>{
        const initialValue=10;
        return initialValue;
    })

    const handleChange=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleChange}> Increase now </button>
      
    </div>
  )
}
