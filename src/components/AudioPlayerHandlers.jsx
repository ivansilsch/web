import { useContext, useCallback } from "react";
import MusicContext from "./../context/MusicContext";


	
function useAudioPlayerHandlers() {

	const { state, setProgress, timeoutID, setTimeoutID } = useContext(MusicContext);

	const pause = useCallback(() => {
		// console.log("eliminando timeoutID", timeoutID);
		clearInterval(timeoutID);
	}, [timeoutID]);


	const getPlayerProgress = useCallback(() => {
		if (state.player?.playing) {
			if (state.player.duration() > 0) {
				return ( state.player.seek() / state.player.duration() ) * 100;
			}
		}
		return 0;
	}, [state.player?.player, state.player?.duration, state.player?.seek]);


	const updateProgress = useCallback(() => {
		// console.log("seek in: ", state.player?.seek())
		setProgress( getPlayerProgress() );
		// progress.current = getPlayerProgress();
	
	}, [getPlayerProgress, state.player?.seek, setProgress]);


	const updateProgressInterval = useCallback(() => {
		const newTimeoutID = setInterval(updateProgress, 1000);
		// console.log("creando timeoutID", newTimeoutID);
		setTimeoutID( newTimeoutID );

	}, [updateProgress, setTimeoutID]);



	return {
		pause,
		getPlayerProgress,
		updateProgressInterval
	};
}

export default useAudioPlayerHandlers;