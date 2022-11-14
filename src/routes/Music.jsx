import MusicList from "./../components/MusicList"
import AudioPlayerBar from "./../components/AudioPlayerBar";

import { MusicProvider } from "./../context/MusicContext";

import GoBack from "./GoBack";


function Music() {

    return (
      <div className='front-body'>
        
        <MusicProvider>
            <AudioPlayerBar/>
            <div className="main-content">
                <GoBack/>  
                <h1 className="title">Music.</h1>
                <MusicList/>
            </div>
        </MusicProvider>

        <footer> <small>&copy; Copyright 2022, Ivan Silva</small> </footer> 
        </div>
    );
}

export default Music;