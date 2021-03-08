import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import CharacterTable from "./Components/CharacterTable";
import ReactPaginate from "react-paginate";
import style from "./paginate.module.css";

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  const [planetData, setPlanetData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    getSwapiPage(page);
  }, [page]);

  useEffect(() => {
    getPlanetData();
  }, []);

  const getSwapiPage = (page) => {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((response) => setCharacterData(response.data.results))
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

  return (
    <div className={style.paginate}>
      <h1>hello world</h1>

      <CharacterTable characterData={characterData} planetData={planetData} />
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount="9"
        onPageChange={({ selected }) => {
          setPage(selected + 1);
        }}
        containerClassName={"paginationBttns"}
      />
    </div>
  );
};

export default App;
