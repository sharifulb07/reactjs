
import './App.css';


import {ContextProvider} from './components/ContextProvider';
import UserProfile from './components/UserProfile';







function App() {



  return (


    <ContextProvider className='flex flex-col items-center  h-screen bg-gray-100'>

     <UserProfile />

    </ContextProvider>
  )
}


export default App;
