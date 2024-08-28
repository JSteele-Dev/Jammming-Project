import React, { useEffect } from "react";
import Tracks from "../Track/Track";

function Tracklist(props) {
    const listing = () => {
        if (props.isPlaylist) {
            return (
                props.playlist.map((songs) => (
                    <Tracks track={songs} key={songs.id} onRemoval={props.onRemove} isRemoval={props.isRemoval} />
                ))
            );
        } else {
            return (
                props.userResult?.map((songs) => (
                    <Tracks track={songs} key={songs.id} onAdd={props.onAdd} isRemoval={props.isRemoval} />
                ))
            )
        }
    }

    useEffect (() => {
        console.log(props.isPlaylist);
    }, [props.isPlaylist])

    return (
        <div>
            {listing()}
        </div>
    )
}

export default Tracklist;