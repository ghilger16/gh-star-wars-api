import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import CharacterTable from "./Components/CharacterTable";
import ReactPaginate from "react-paginate";
import { BeatLoader } from "react-spinners";

import SearchBar from "./Components/SearchBar";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getCharacters("https://swapi.dev/api/people/");
  }, []);

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  const getCharacters = async (url) => {
    setLoading(true);
    const response = await axios.get(url);
    let characters = response.data.results;

    characters = await Promise.all(
      characters.map(async (character) => {
        character.species = await getSpecies(character.species);
        character.homeworld = await getHomeWorld(character.homeworld);

        return character;
      })
    );

    setCharacters(characters);
    setLoading(false);
  };

  const getSpecies = (url) => {
    if (url.length === 0) {
      return "Human";
    }
    return axios.get(url[0]).then((response) => response.data.name);
  };

  const getHomeWorld = (url) => {
    return axios.get(url).then((response) => response.data.name);
  };

  const handlePageClick = (pageNumber) => {
    getCharacters(`https://swapi.dev/api/people/?page=${pageNumber}`);
  };

  const handleSearch = (query) => {
    getCharacters(`https://swapi.dev/api/people/?search=${query}`);
  };

  return (
    <div class="p-5 text-center bg-light">
      <h1 class="mb-3">Star Wars</h1>

      <SearchBar setQuery={setQuery} />

      {!loading ? <CharacterTable characters={characters} /> : <BeatLoader />}

      <ReactPaginate
        pageCount="9"
        onPageChange={({ selected }) => {
          handlePageClick(selected + 1);
        }}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default App;
