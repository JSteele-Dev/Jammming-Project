import React from "react";

function Tracks(props) {
  const passTrack = () => {
    props.onAdd(props.track);
  };
  const passTrackToRemove = () => {
    props.onRemoval(props.track);
  };

  const button = () => {
    if (props.isRemoval) {
      return <button onClick={passTrackToRemove}> - </button>;
    } else {
      return <button onClick={passTrack}> + </button>;
    }
  };

  return (
    <div>
      <div>
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {/* verify if isRemoval is true or false, true will remove track, false will add track */}
      {button()}
    </div>
  );
}

export default Tracks;
