
import './App.css';
import React, { useEffect, useState } from 'react';
import Switcher from './components/Switcher';



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log('This is a example of useEffect');
    document.title = `You clicked ${count} times`;
  }, [count])

  return (
    <div className='flex flex-col items-center  h-screen bg-gray-100'>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>increament</button>



    </div>
  )
}


export default App;
