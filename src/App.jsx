
import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [myName, setMyName] = React.useState('')


  return (
    <div className='flex flex-col items-center  h-screen bg-gray-100'>
      <form action="">
        <label htmlFor="name">Name</label>
        <input onChange={(e)=>setMyName(e.target.value)} type="text" id='name' className='bg-white px-5 py-2 rounded-[30px] border-none focus:outline-none hover:border-none' placeholder='Input your name' />
      </form>
      <p>{myName}</p>
    </div>
  )
}

export default App
