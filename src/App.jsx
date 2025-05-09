
import './App.css';
import React from 'react';
import Example from './components/Example';
import Examplethree from './components/Examplethree';
import ExampleFour from './components/ExampleFour';


function App() {
  

 
  return (
    <div className='flex flex-col items-center  h-screen bg-gray-100'>

    <Examplethree />

    <ExampleFour />
    </div>
  )
}


export default App;
