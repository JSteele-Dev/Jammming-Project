import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist(props) {
    return (
        <div style={{width: '50%', marginTop: 50}}>
            <input placeholder="Playlist Name..."/>
            <Tracklist userAdd={props.playlistTracks} onRemove={props.onRemove} isRemoval='true' />
            <button>Save To Spotify</button>
        </div>
    )
}

export default Playlist;