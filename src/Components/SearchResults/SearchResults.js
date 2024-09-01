import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults(props) {
  return (
    <div style={{ width: "50%", marginTop: 50 }}>
      <Tracklist
        userResult={props.userResult}
        isRemoval={false}
        onAdd={props.onAdd}
        isPlaylist={false}
      />
    </div>
  );
}

export default SearchResults;
