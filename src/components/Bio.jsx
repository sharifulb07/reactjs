import React from 'react'

const Bio = () => {
  return (
    <div>
      <div className="intro">
        <h1>Welcome to my website! </h1>
      </div>
      <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
      <p className="summary">
        You can find my thoughts here.
        <br />
        <b>And <i>pictures </i></b> of scientists 
      </p>
    </div>
  )
}

export default Bio
