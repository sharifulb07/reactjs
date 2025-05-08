
import React from 'react';

export default function Greet({name}){
    const greetings='Hello';
    const date=new Date();
    return(
        <div>
            <h1>{`${greetings} ${name}`}</h1>
            <p className='text-blue-500 font-medium text-[25px]'>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>

            
        </div>
    )
}