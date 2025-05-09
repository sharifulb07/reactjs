
import './App.css';
import React, { useState } from 'react';


function App() {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      ratings: 9.3
    },
    {
      title: 'The Godfather',
      ratings: 9.2
    },
    {
      title: 'The Dark Knight',
      ratings: 9.0
    }
  ]);


  const handleChange = (id) => {
    setMovies(movies.map((movie, index) => index === id ? { ...movie, ratings: 122 } : movie))
  }
  return (
    <div className='flex flex-col items-center  h-screen bg-gray-100'>

      {movies.map((movie, index) => (
        <div key={index}>
          <h2 onClick={() => handleChange(index)}>{movie.title}</h2>
          <p>Ratings: {movie.ratings}</p>
        </div>
      ))}


    </div>
  )
}


export default App;
