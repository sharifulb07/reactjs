import React from 'react'
import { people } from './data'
import { getImageUrl } from './utils'

const NameList = () => {
    const chemists=people.filter(person=> person.profession==='chemist');

    const listItems=chemists.map(person=>{
      return(  <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <h2>{person.name}</h2>
        <p>{person.accomplishment}</p>
    </li>)
    }
       
        )
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default NameList
