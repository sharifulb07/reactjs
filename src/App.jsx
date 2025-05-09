
import './App.css';
import React, { createContext } from 'react';
import ComponentA from './components/ComponentA';





export const Data = createContext();
export const Data1 = createContext();

function App() {
  const name = "Shariful islam";
  const age=36;


  return (
    <Data.Provider value={name}>
    <Data1.Provider value={age}>

    <div className='flex flex-col items-center  h-screen bg-gray-100'>

      <ComponentA />

    </div>
    </Data1.Provider>
    </Data.Provider>
  )
}


export default App;
