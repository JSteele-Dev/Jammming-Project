import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import Container from "react-bootstrap/Container";

function Playlist(props) {
  const handleNameChange = (e) => {
    props.onNameChange(e.target.value);
  };

  return (
    <Container>
      <input placeholder={props.playlistName} onChange={handleNameChange} className="mt-2" />
      <Container className="mt-4 mb-4">
        <Tracklist
          playlist={props.playlistTracks}
          onRemove={props.onRemove}
          isRemoval={true}
          isPlaylist={true}
        />
      </Container>
      <button onClick={props.onSave}>Save To Spotify</button>
    </Container>
  );
}

export default Playlist;
