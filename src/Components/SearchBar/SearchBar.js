import React from 'react';

function SearchBar(props) {
    return (
        <div>
            <input placeholder='Enter a Song, Album or Artist' />
            <button>Search...</button>
        </div>
    )
}

export default SearchBar;