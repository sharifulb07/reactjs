import React, { useEffect, useState } from 'react'

export default function Examplethree() {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem('name');
        return savedName ? JSON.parse(savedName) : '';
    })

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));

    }, [name])


    const handleClear = () => {
        setName('');
    }

    return (
        <div>
            <input placeholder='Your name Please' type='text' value={name} onChange={((e) => setName(e.target.value))} />
            <button onClick={handleClear}> Clear </button>
            <p>{name} </p>
        </div>
    )
}
