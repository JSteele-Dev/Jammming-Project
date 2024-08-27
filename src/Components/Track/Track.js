import React from "react";

function Tracks({track, onAdd, onRemoval, isRemoval}) {
    const passTrack = () => {
        onAdd.onAdd(track.track);
    }
    const passTrackToRemove = () => {
        onRemoval.onRemoval(track.track);
    }

    return (
        <div>
            <div>
                <h3>{track.track}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {/* verify if isRemoval is true or false, true will remove track, false will add track */}
            <button onClick={isRemoval ? passTrackToRemove : passTrack}>{isRemoval ? '-' : '+'}</button>
        </div>
    )
}

export default Tracks;