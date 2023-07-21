import React from "react";
import { useImmer } from 'use-immer';


const Form = () => {
  const [person, setPerson] =useImmer({
    name: "Shariful Islam ",
    artwork: {
      title: "Frontend Developer ",
      city: "Khulna",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  const handleNameChange=(e)=>{
setPerson(
    draft=>{
        draft.name=e.target.value
    }
)

  }

  const handleTitleChange=(e)=>{
    setPerson(draft=>{
        draft.artwork.title=e.target.value
    })
  }

  const handleCityChange=(e)=>{
    setPerson(draft=>{
        draft.artwork.city=e.target.value
    })
  }
  const handleImageChange=(e)=>{
    setPerson(draft=>{
        draft.artwork.image=e.target.value
    })
  }

  const handleSubmit=()=>{
    alert("All information has been submitted successfully ");
  }


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
    <label>Name: </label>
    <input type="text" value={person.name} onChange={handleNameChange} />
    <label> Title: </label>
    <input type="text" value={person.artwork.title} onChange={handleTitleChange} />
    <label>City: </label>
    <input type="text" value={person.artwork.city}  onChange={handleCityChange} />
    <label>ImageURL: </label>
    <input type="text" value={person.artwork.image}  onChange={handleImageChange} />

        </div>

      </form>
    </div>
  );
};

export default Form;
