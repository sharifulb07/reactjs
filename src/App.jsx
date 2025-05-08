
import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Greet from './components/Greet';
import Button from './components/Button';

function App() {

  const userInfo = [
    {
      id: 1,
      username: "shariful islam",
      email: "shariful@gmail.com",
      location: "Dhaka",
    }
    ,
    {
      id: 2,
      username: "hasan islam",
      email: "shariful@gmail.com",
      location: "Dhaka",
    }
    ,
    {
      id: 3,
      username: "Robiul islam",
      email: "shariful@gmail.com",
      location: "Astana",
    }
    ,
    {
      id: 4,
      username: "Ashia  islam",
      email: "shariful@gmail.com",
      location: "Dhaka",
    }
    ,
  ]

  return (
    <div className='flex flex-col items-center  h-screen bg-gray-100'>

      {
        userInfo.map(({ id, username, email, location }) => (
          <div key={id}>
            <h1>{username}</h1>
            <h2>{email}</h2>
            <p>{location}</p>
          </div>
        ))
      }
      <Button color="white" bg="blue" fontSize={20}>Click Me</Button>
    </div>
  )
}

export default App
