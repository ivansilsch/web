import MusicList from "./../components/MusicList"
import AudioPlayerBar from "./../components/AudioPlayerBar";

import { useNavigate } from "react-router-dom";


function Music() {

    const navigate = useNavigate();

    return (
      <div className='front-body'>

        <AudioPlayerBar/>
        <div className="main-content">
            <button className="back-button" onClick={()=>{navigate(-1)}}>Go back</button>
            <h1 className="title">Music.</h1>
            <MusicList/>
        </div>

        <footer> <small>&copy; Copyright 2022, Ivan Silva</small> </footer> 
        </div>
    );
}

export default Music;