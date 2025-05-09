
import './App.css';
import React, { useEffect, useState } from 'react';
import Switcher from './components/Switcher';



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      console.log(data);

      if (data && data.length) setData(data);
    }
    fetchData();

  }, [])

  return (
    <div className='flex flex-col items-center  h-screen bg-gray-100'>
    
{
  data.map((item)=>
    <p className='text-black' key={item.id}>{item.title}</p>
  )
}

    </div>
  )
}


export default App;
