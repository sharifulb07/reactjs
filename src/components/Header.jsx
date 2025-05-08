import React from 'react'

export default function Header() {
    return (
        <>
        <header className='flex justify-between items-center  p-4 w-full'>
            <h1 className='text-black'>Welcome to our Home Page </h1>
            <nav className='flex gap-5 items-center '>
                <a href="/" className='text-black'>Home</a>
                <a href="/about">About </a>
                <a href="/contact">Contact</a>
            </nav>

        </header> 
        </>
     
  )  
}
