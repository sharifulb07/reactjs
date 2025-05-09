import React, { useEffect } from 'react'

export default function BasicEffect() {
    useEffect(() => {
        console.log('useEffect hook is mounted');


    }, []);
  return (
    <div>
      
    </div>
  )
}
