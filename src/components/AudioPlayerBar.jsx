import MusicContext from "./../context/MusicContext";
import { useContext, useEffect } from "react";

import useAudioPlayerHandlers from "./AudioPlayerHandlers"
import AudioStatus from './../context/AudioStatus';


function AudioPlayerBar() {

  const { state, progress } = useContext(MusicContext);
  const { pause, updateProgressInterval } = useAudioPlayerHandlers();


  useEffect(()=>{
    if (state.audioStatus === AudioStatus.PAUSED) {
      pause();
      state.player?.pause();
    } else if (state.audioStatus === AudioStatus.RESUMED) {
      updateProgressInterval();
      state.player?.play();
    } else if (state.audioStatus === AudioStatus.STOPPED) {
      // console.log("DEBE DETENERSE//!!");
      // pause();
      // state.player?.stop();
    }
  }, [state.audioStatus]);

  
  useEffect(() => {
    if (state.audioStatus === AudioStatus.STARTED) {
      updateProgressInterval();
      state.player?.play()
    } 
    else if (state.audioStatus === AudioStatus.RESTARTED) {
      // console.log("RESTARTING........");
      pause();
      updateProgressInterval();
      state.player?.play()      
    }
  }, [state.player, state.currentAudio?.file, state.audioStatus]);

  const playing = state.audioStatus !== AudioStatus.STOPPED && state.audioStatus !== AudioStatus.PAUSED;
  const playingClass = playing ? "" : "hide-bar"


  function getCurrentSongElement(index) {
    return <small className="text-bar" key={index}>
      <div className="text-listening">Listening:&nbsp;&nbsp;</div>
      { state.currentAudio?.name } &nbsp;&nbsp; 
    </small>
  }

  return (
    <div 
    className={"audio-player-bar-container " + playingClass}>      
      <div className="audio-player-bar">
        {/* <div className="audio-progress">
          <div className="audio-progress-current" style={{width: progress + "%" }}></div>
        </div> */}
        <div></div>
        <div className="maquee-wrapper">
          <div className="marquee">
            {
              [0,1,2,3,4].map((_, index)=>getCurrentSongElement(index))
            }  
          </div>
        </div>

      </div>
    </div>
  );
}

export default AudioPlayerBar;