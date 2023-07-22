import React, {useState} from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const BucketList = () => {
    const [list, setList]=useState(initialList);
const handleToggle=(artworkId, nextSeen)=>{
   setList(list.map(art=>{
        if(art.id===artworkId){
            return {...art,seen:nextSeen}
        }else{
            return art;
        }
    }))
}

  return (
    <div>
        <h2>Art Bucket List here </h2>
        <h3>My list of art to see: </h3>
        <ItemList 
        artworks={list}
        onToggle={handleToggle}
        />
      
    </div>
  )
}

function ItemList({artworks, onToggle}){

    return(
        <ul>
            {
                art
            }
        </ul>
    )
}


export default BucketList
