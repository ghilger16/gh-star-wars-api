import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setCharacterData }) => {
  const [query, setQuery] = useState("");

  const getSearchQuery = (query) => {
    axios
      .get(`https://swapi.dev/api/people/?search=${query}`)
      .then((response) => setCharacterData(response.data.results))
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchQuery(query);
  };

  return (
    <form class="input-group" onSubmit={handleSubmit}>
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
