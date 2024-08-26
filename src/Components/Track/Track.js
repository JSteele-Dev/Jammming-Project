import React from "react";

function Tracks({track, onAdd}) {
    const passTrack = async (e) => {
        onAdd.onAdd(track.track);
    }

    return (
        <div>
            <div>
                <h3>{track.track}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button onClick={passTrack}>Add or Remove button</button>
        </div>
    )
}

export default Tracks;