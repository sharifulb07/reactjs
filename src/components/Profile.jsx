import React from "react";

const Profile = () => {
  return (
    <div>
      <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Aklilu limU" />
    </div>
  );
};



const Gallery = () => {
  return (
    <div>
      <h2>Amazing Scientists </h2>

      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
};

export default Gallery;
