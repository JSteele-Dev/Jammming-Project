import React, { useState } from "react";

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
    <div>
      <input
        placeholder="Enter a Song, Album or Artist"
        onChange={handleTermChange}
      />
      <p style={{color: "red"}} >{valid ? "" : "Please enter a valid input"}</p>
      <button onClick={passTerm}>Search...</button>
    </div>
  );
}

export default SearchBar;
