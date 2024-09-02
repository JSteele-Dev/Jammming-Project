import React, { useEffect, useState } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import { Spotify, accessToken } from "../../util/Spotify";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New playlist Name...");
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
      updatePlaylistName("New playlist Name...");
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
    <Container className="text-center">
      <h1 className="mt-5 mb-5 bg-black text-white p-3">
        Ja<span style={{color: "purple"}}>mmm</span>ing
      </h1>
      <Container className="text-center">
        <SearchBar onSearch={search} />
        <Container className="border rounded-4">
          <Row>
            <Col className="border-end">
              <SearchResults userResult={searchResults} onAdd={addTracks} />
            </Col>
            <Col className="border-start">
              <Playlist
                playlistName={playlistName}
                playlistTracks={playlistTracks}
                onRemove={removeTracks}
                onNameChange={updatePlaylistName}
                onSave={savePlaylist}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
