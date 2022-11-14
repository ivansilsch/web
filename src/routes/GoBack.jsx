import { useNavigate } from "react-router-dom";
import AudioStatus from './../context/AudioStatus';

import MusicContext from "./../context/MusicContext";
import { useContext } from "react";


function GoBack() {
    
    const navigate = useNavigate();
    const { state, setState } = useContext(MusicContext);
    
    function handler() {
        setState({ ...state, audioStatus: AudioStatus.STOPPED });
        navigate(-1);
    }
    
    return (
        <button 
            className="back-button" 
            onClick={handler}
        >Go back</button>
    );
}

export default GoBack;
