import React from 'react'

const person={
  name:'Gregorio Y. Zara (sharif)',
  theme:{
    backgroundColor:'Green',
    color:'white',
  }
}

const TodoList = () => {
  return (
    <div style={person.theme}>
      <h1>{person.name} Todos </h1>

        <img className='photo' src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" />

    <ul style={{backgroundColor:'black', color:'pink'}}>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology </li>
    </ul>




    </div>
  )
}

export default TodoList
