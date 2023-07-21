import React from 'react'
import Tick from './Tick'
import Cross from './Cross'

const Item = ({name, packed}) => {
        const color=!packed? 'red':'black';
  return (
    <div>

       <h2 style={{display:'flex', gap:6, color:color }}> {name} {packed ? <Tick />: <Cross /> } </h2>
      
    </div>
  )
}

export default Item
