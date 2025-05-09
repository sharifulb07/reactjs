import React , {useState, useContext} from 'react'
import { MyContext } from './ContextProvider'

const UserProfile = () => {
    const [newName, setNewName] = useState(""); 
    const {user, handleUserName} = useContext(MyContext);
    const handleNewName=(newName)=>{
        if(newName.trim()){
            handleUserName(newName);
            setNewName("");
        }
    }


  return (
    <div>
        <p>{user} </p>
        <input type='text' value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder='Enter new name' className='border p-2 rounded'/>
        <button onClick={()=>handleNewName(newName)} className='bg-blue-500 text-white p-2 rounded'>Change Name</button>
      
    </div>
  )
}

export default UserProfile
