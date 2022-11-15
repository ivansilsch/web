import { useContext, useState, useEffect } from "react";
import MusicContext from "./../context/MusicContext";
import AudioStatus from './../context/AudioStatus';

import useAudioPlayerHandlers from "./../components/AudioPlayerHandlers"


const BackListener = () => {

    const { state, setState } = useContext(MusicContext);
    const { pause, updateProgressInterval } = useAudioPlayerHandlers();

    const [active, setActive] = useState(false);

    useEffect(()=>{
      window.onpopstate = () => {
        if (!active) {
            console.log("BACKKKKKK")
            pause();
            setState({ ...state, audioStatus: AudioStatus.STOPPED })
            setActive(true);
        }
        setActive(false);
      }
    });   
    return <></>;
}

export default BackListener;