import React from "react";
import Tracks from "../Track/Track";
import Container from "react-bootstrap/Container"

function Tracklist(props) {
  const listing = () => {
    if (props.isPlaylist) {
      return props.playlist.map((songs) => (
        <Tracks
          track={songs}
          key={songs.id}
          onRemoval={props.onRemove}
          isRemoval={props.isRemoval}
        />
      ));
    } else {
      return props.userResult?.map((songs) => (
        <Tracks
          track={songs}
          key={songs.id}
          onAdd={props.onAdd}
          isRemoval={props.isRemoval}
        />
      ));
    }
  };

  return <Container>{listing()}</Container>;
}

export default Tracklist;
