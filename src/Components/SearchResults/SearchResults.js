import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import Container from "react-bootstrap/Container"

function SearchResults(props) {
  return (
    <Container>
      <Tracklist
        userResult={props.userResult}
        isRemoval={false}
        onAdd={props.onAdd}
        isPlaylist={false}
      />
    </Container>
  );
}

export default SearchResults;
