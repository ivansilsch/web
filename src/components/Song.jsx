import { useContext } from "react";

import MusicContext from "./../context/MusicContext";

import { Howl } from "howler";

import AudioStatus from './../context/AudioStatus';


function Song(props) {

  const { state, setState } = useContext(MusicContext);

  const { name, filename } = props.song;
  const album = props.album;

  const audioFile = "/"+album+"/"+filename;
  const cover = album !== "Singles" ? "/"+album+"/cover.jpg" : "/"+album+"/"+name+".jpg";


  const playing = state.audioStatus === AudioStatus.STARTED || 
                  state.audioStatus === AudioStatus.RESTARTED ||
                  state.audioStatus === AudioStatus.RESUMED;

                  
                  
  const itsSameAudio = state.currentAudioFile === audioFile;

  const togglePlayHandler = () => {

      // Play the first time
    if (state.audioStatus === AudioStatus.STOPPED) {
      setState({
        ...state,
        audioStatus: AudioStatus.STARTED,
        currentAudioFile: audioFile,
        currentAudio: {
          album,
          name,
          file: audioFile,
        },
        player: new Howl({ src: state.audioSourceEndpoint + audioFile }),
      })
    }
  

    // Play changing to the new audio
    if ( (playing || state.audioStatus === AudioStatus.PAUSED) && !itsSameAudio ) {
      state.player?.stop();
      state.player?.unload();
      setState({
        ...state,
        audioStatus: AudioStatus.RESTARTED,
        currentAudio: {
          album,
          name,
          file: audioFile,
        },
        player: new Howl({ src: state.audioSourceEndpoint + audioFile }),
      })

    }


    // Pause
    if (playing && itsSameAudio) {
      setState({ ...state, audioStatus: AudioStatus.PAUSED })
    }
    

    // Resume
    if (state.audioStatus === AudioStatus.PAUSED && itsSameAudio) {
      setState({ ...state, audioStatus: AudioStatus.RESUMED })
    }

  }

  return (
    <button onClick={togglePlayHandler} className="song">
      <div className="cover-container">
        <img className="cover-img" src={state.audioSourceEndpoint + cover} alt="cover image"/> 
      </div>
      <div className="song-name">{name}</div>
      <div className="play-icon">
        &#9654;
        {/* {
          No actualiza alboton anterior si no es el mismo que se reprodujo 
          playing && itsSameAudio ? "Stop" : <div>&#9654;</div>
        } */}
      </div> 
    </button>
  );

}

export default Song;