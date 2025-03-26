import React, { useState } from "react";
import RegistrationForm from "./components/Registration";
import Counter from "./components/Counter";
import Form from "./components/Counter";
import VideoPlayer from "./components/Counter";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {/* <RegistrationForm />
      <Counter /> */}

      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}{" "}
      </button>
      <div style={{width:40}}>
      <VideoPlayer src={'https://cdn.pixabay.com/video/2022/04/07/113205-697220704_large.mp4'} isPlaying={isPlaying} />
      <iframe width="521" height="391" src="https://www.youtube.com/embed/RN8VL6JVrYI" title="Kore Kore Sapne Full Video Song : Sooryavansham | Amitabh Bachchan, Soundarya |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div>
    </div>
  );
};

export default App;
