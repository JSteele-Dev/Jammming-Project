import React from "react";
import Tracks from "../Track/Track";

function Tracklist(props) {
    return (
        <div>
            {props.userResult?.map((songs) => (
                <Tracks track={songs} key={songs.id} onAdd={props.onAdd} isRemoval={props.isRemoval} />
            ))}
        </div>
    )
}

export default Tracklist;