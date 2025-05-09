import React from 'react'

export default function PopUpContent({
    copied
}) {
  return (
    <div style={{position:'abosolute', top:'4rem'}}>
      {copied && (
     <div>
        Copied to clipboard
     </div>   
    )}
    </div>
  )
}
