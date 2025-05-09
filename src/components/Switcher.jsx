import React, { useState } from 'react'

export default function Switcher() {
    const [sw, setSw] = useState(false);

    return (
        <div>
            {sw? (<p>Dark</p>) : (<p>Light</p>)}

            <input type='text' key={sw ? "Dark" : "Light"} className='bg-gray-200 p-2 rounded-md' placeholder={sw ? "Dark" : "Light"} />
            <button onClick={() => setSw(!sw)} className='bg-blue-500 text-orange-600 p-2 rounded-md mt-2'>
                Switcher</button>
        </div>
    )
}
