import React, {useState} from 'react'

export default function ExampleFour() {
    const [profile, setProfile]=useState({
        name:'',
        age:'',
    })

    const handleChange=e=>{
        const {name, value}=e.target;
        setProfile({
            ...profile,
            [name]:value
        })
    }
  return (
    <div>

        <input type='text'name='name' value={profile.name} onChange={handleChange} placeholder='Your name' />
        <input type='text' name='age' value={profile.age} onChange={handleChange} placeholder='Your age' />

        <p>{profile.name}</p>
        <p>{profile.age}</p>
        <button onClick={() => setProfile({name:'', age:''})}> Clear </button>
      
    </div>
  )
}
