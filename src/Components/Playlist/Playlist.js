import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
  const handleNameChange = (e) => {
    props.onNameChange(e.target.value);
  };

  return (
    <div style={{ width: "50%", marginTop: 50 }}>
      <input placeholder={props.playlistName} onChange={handleNameChange} />
      {/* TODO: remove bottom line... only for testing purposes. */}
      <p>{props.playlistName}</p>
      <Tracklist
        playlist={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
        isPlaylist={true}
      />
      <button onClick={props.onSave}>Save To Spotify</button>
    </div>
  );
}

export default Playlist;
