import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import CharacterTable from "./Components/CharacterTable";
import ReactPaginate from "react-paginate";
import { BeatLoader } from "react-spinners";

import SearchBar from "./Components/SearchBar";

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  const [planetData, setPlanetData] = useState([]);
  const [speciesData, setSpeciesData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSwapiPage(page);
  }, [page]);

  useEffect(() => {
    getPlanetData();
    getSpeciesData();
  }, []);

  const getSwapiPage = (page) => {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then(
        (response) => setCharacterData(response.data.results),
        setLoading(false)
      )
      .catch((err) => console.error(err));
  };

  const getPlanetData = () => {
    const processedResponses = [];

    for (let i = 1; i < 7; i++) {
      axios
        .get(`http://swapi.dev/api/planets/?page=${i}`)
        .then((response) => {
          response.data.results.map((response) => {
            processedResponses.push(response);
          });
          setPlanetData(processedResponses);
        })
        .catch((err) => console.error(err));
    }
  };

  const getSpeciesData = () => {
    const processedResponses = [];

    for (let i = 1; i < 5; i++) {
      axios
        .get(`http://swapi.dev/api/species/?page=${i}`)
        .then((response) => {
          response.data.results.map((response) => {
            processedResponses.push(response);
          });
          setSpeciesData(processedResponses);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div class="p-5 text-center bg-light">
      <h1 class="mb-3">Star Wars</h1>

      <SearchBar setCharacterData={setCharacterData} />

      {loading === false ? (
        <CharacterTable
          characterData={characterData}
          planetData={planetData}
          speciesData={speciesData}
        />
      ) : (
        <BeatLoader />
      )}

      <ReactPaginate
        pageCount="9"
        onPageChange={({ selected }) => {
          setPage(selected + 1);
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
