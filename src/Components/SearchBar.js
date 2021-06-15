import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setQuery }) => {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(userInput);
  };

  return (
    <form class="input-group m-4" onSubmit={handleSubmit}>
      <input
        type="search"
        class="form-control rounded bg-dark text-light"
        placeholder="Search Characters"
        required
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        type="button"
        class="btn btn-outline-primary ml-2"
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
