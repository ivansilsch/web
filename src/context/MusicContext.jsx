import { createContext, useState, useRef } from "react";
import AudioStatus from './../context/AudioStatus';


const MusicContext = createContext({});


export const MusicProvider = (props) => {

	const [state, setState] = useState({
		player: null,
		audioStatus: AudioStatus.STOPPED,
		currentAudioFile: "",
		audioSourceEndpoint: "https://ivansilvadotme.000webhostapp.com/music.ivansilva.me",
	});

	const [progress, setProgress] = useState(0);
	const [timeoutID, setTimeoutID] = useState();

	// Getters
	function getCurrentAudioSource() {
		return state.audioSourceEndpoint + state.currentAudioFile;
	}
	
	return (
		<MusicContext.Provider value={{
			state, 
			setState,
			
			progress,
			setProgress,

			timeoutID,
			setTimeoutID,

			getCurrentAudioSource,
		}}>
			{props.children}
		</MusicContext.Provider>
	);
}

export default MusicContext;