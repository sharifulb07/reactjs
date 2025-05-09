import React, { useContext } from 'react'
import { Data, Data1 } from '../App'

const ComponentC = () => {
    const userName = useContext(Data);
    const userAge = useContext(Data1);

    return (

        <div>
            <h2>{userName}</h2>
            <p>{userAge}</p>
        </div>


    )
}

export default ComponentC
