import React, { useState } from "react";

const Search = ({ query, setQuery }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={(e) => setInput(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
