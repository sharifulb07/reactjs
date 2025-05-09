import React, {useState, useEffect, useRef} from 'react'

const Timer = () => {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        inputRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(inputRef.current);
    }, []);
  return (
    <div>
        <h1 className='text-2xl font-bold'>Timer</h1>
        <p className='text-xl'>{count} seconds</p>
        <button onClick={() => clearInterval(inputRef.current)} className='bg-red-500 text-black p-2 rounded'>Stop Timer</button>
        <button onClick={() => setCount(0)} className='bg-blue-500 text-blue p-2 rounded'>Reset Timer</button>
      
    </div>
  )
}

export default Timer
