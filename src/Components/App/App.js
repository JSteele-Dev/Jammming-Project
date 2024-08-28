import React, { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([{
    artist: 'HIM',
    album: 'Dark Light',
    track: 'Killing Loneliness',
    id: 1
  },
  {
    artist: 'HIM',
    album: 'Razorblade Romance',
    track: 'Join Me In Death',
    id: 2
  },
  {
    artist: 'HIM',
    album: 'Razorblade Romance',
    track: 'Gone With The Sin',
    id: 3
  },
  {
    artist: 'HIM',
    album: 'Greatest Lovesongs Vol. 666',
    track: 'Wicked Game',
    id: 4
  }]);
  const [playlistName, setPlaylistName] = useState('Playlist...');
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      artist: 'HIM',
      album: 'Dark Light',
      track: 'Killing Loneliness',
      id: 1
    }
  ]);

  const addTracks = (track) => {
    const isAdded = playlistTracks.find((t) => t.id === track.id);
    const addTrack = playlistTracks.concat(track);

    if (isAdded) {
      console.log(track);
      console.log("This Track is already added");
    } else {
      console.log(track);
      setPlaylistTracks(addTrack);
    }
  }
  const removeTracks = (track) => {
    const toRemove = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(toRemove);
  }
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  return (
    <div className="App">
      <h1>Ja<span style={{color: 'purple'}}>mmm</span>ing</h1>
      <div>
        <SearchBar />
        <div style={{display: 'flex', justifyContent:'center'}}>
          <SearchResults userResult={searchResults} onAdd={addTracks} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTracks} onNameChange={updatePlaylistName} />
        </div>
      </div>
    </div>
  );
}

export default App;
