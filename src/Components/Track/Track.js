import React from "react";

function Tracks({track, onAdd, onRemoval}) {
    const passTrack = (e) => {
        onAdd.onAdd(track.track);
    }
    const passTrackToRemove = (e) => {
        onRemoval.onRemoval(track.track);
    }

    return (
        <div>
            <div>
                <h3>{track.track}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button onClick={passTrack} on>Add or Remove button</button>
        </div>
    )
}

export default Tracks;