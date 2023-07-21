// Video Player components
const VideoPlayer=()=>{
    return(
        <div>

            <Toolbar onMoviePlayer={()=>alert('The movie is Playing ')}
            onUploadImage={()=>alert("The Image is uploaded ")} />

        </div>
    )
}

// Toolbar components

const Toolbar=({onMoviePlayer, onUploadImage})=>{
    return(
        <div>
            <Button onClick={onMoviePlayer}>Play Movie </Button>
            <Button onClick={onUploadImage}>Please Upload image </Button>
        </div>
    )
}


// Button components

const Button=({onClick, children})=>{
    return(
        <div>
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default VideoPlayer;