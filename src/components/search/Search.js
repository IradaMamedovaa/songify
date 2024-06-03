import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  console.log("results:", results);

  const handleSearch = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/?method=track.search&track=${query}&api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&format=json`
    );
    setResults(response.data.results.trackmatches.track);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
        <ul>
          {results.map((track) => (
            <li key={track.name}>{track.name}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Search;
