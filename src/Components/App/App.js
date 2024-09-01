import React, { useEffect, useState } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";
import { Spotify, accessToken } from "../../util/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("Playlist Name...");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTracks = (track) => {
    const isAdded = playlistTracks.find((t) => t.id === track.id);
    const addTrack = playlistTracks.concat(track);

    if (isAdded) {
      console.log("This Track is already added");
    } else {
      setPlaylistTracks(addTrack);
    }
  };
  const removeTracks = (track) => {
    const toRemove = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(toRemove);
  };
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };
  const savePlaylist = () => {
    const trackURI = playlistTracks.map((t) => t.uri);
    Spotify.saveUserPlaylist(playlistName, trackURI).then(() => {
      updatePlaylistName("Playlist Name...");
      setPlaylistTracks([]);
      setSearchResults([]);
    });
  };
  const search = (userSearch) => {
    Spotify.userSearch(userSearch).then((result) => setSearchResults(result));
  };

  useEffect(() => {
    if (!accessToken) {
      Spotify.getAccessToken();
    }
  }, []);

  return (
    <div className="App">
      <h1>
        Ja<span style={{ color: "purple" }}>mmm</span>ing
      </h1>
      <div>
        <SearchBar onSearch={search} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SearchResults userResult={searchResults} onAdd={addTracks} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTracks}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
