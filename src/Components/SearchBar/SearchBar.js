import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container"

function SearchBar(props) {
  const [term, setTerm] = useState("");
  const [valid, setValid] = useState(true);

  const passTerm = () => {
    if (!term) {
      setValid(false);
    } else {
      setValid(true);
      props.onSearch(term);
    }
  };
  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <Container>
      {valid && (
        <div>
          <input
            placeholder="Enter a Song, Album or Artist"
            onChange={handleTermChange}
          />
          <br />
          <button onClick={passTerm}>Search...</button>
        </div>
      )}
      {!valid && (
        <Alert variant="danger" onClose={() => setValid(true)}>
          <Alert.Heading className="text-center">Invalid search</Alert.Heading>
          <p className="text-center">
            Please search a valid song, artist or album name
          </p>
          <hr />
          <div className="d-flex justify-content-center">
            <Button onClick={() => setValid(true)} variant="danger">
              Try Again...
            </Button>
          </div>
        </Alert>
      )}
    </Container>
  );
}

export default SearchBar;
