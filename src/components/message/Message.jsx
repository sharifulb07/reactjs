import React, { useState } from 'react';



const Message = () => {
    const [to,setTo]=useState("Alice");
    const [message,setMessage]=useState("Hello");
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTimeout(()=>{
            alert(`Hey, ${message} to ${to}`)
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Messaging Apps </h2>
            <div>


            <select value={to} onChange={(e)=>setTo(e.target.value)}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
            </select>
            </div>
<div>


            <textarea value={message} 
            placeholder="Messages"
            onChange={(e)=>setMessage(e.target.value)}
            />
</div>
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Message
