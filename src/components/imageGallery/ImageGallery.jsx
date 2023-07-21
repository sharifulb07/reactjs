import React, { useState } from "react";
import sculptureList from "./Data";

const ImageGallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  // handleNextClick
  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  // handleShowMore
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  let sculpture=sculptureList[index];
  return (
    <div>
 
     
            <button onClick={handleNextClick}>Next</button>
            <h2>
              <i>{sculpture.name}</i>
              by {sculpture.artist}
            </h2>
            <button onClick={handleShowMore}>{showMore?'Hide':'Show'} </button>
           {showMore && <p>{sculpture.description}</p>}

            <img
            src={sculpture.url}
            alt={sculpture.alt}
            />
        
    </div>
  );
};

export default ImageGallery;
