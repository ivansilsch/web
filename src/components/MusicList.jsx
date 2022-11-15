import { useState, useEffect, memo } from "react";
import Song from "./Song";


function MusicList() {

  const [musicData, setMusicData] = useState(null);

  function fetchAudio(url) {
    fetch(url)
    .then(response => setAudioData(response.data))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    fetch("/music.json")
    .then(response => response.json())
    .then(data => {
      setMusicData(data);
    });
  }, []);


  return (
    <div>
      <div className="albums">
        {
          musicData?.map((album, index) => {
            return (
              <div key={index} className="album">
                <div>{album.title}</div>
                <div className="songs">
                  { 
                    album.songs.map((song, index) => {
                      return <Song key={index} index={index} album={album.title} song={song} />
                    } ) 
                  }
                </div>
              </div>
            );
          })
        }
      </div> 
    </div>
  );
}

export default MusicList;