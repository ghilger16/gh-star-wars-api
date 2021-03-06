import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterTable from "./Components/CharacterTable";
import ReactPaginate from "react-paginate";
import style from "./paginate.module.css";

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState([]);

  console.log(characterData);

  useEffect(() => {
    getSwapiPage(page);
  }, [page]);

  const getSwapiPage = (page) => {
    axios
      .get(`https://swapi.dev/api/people/?page=${page}`)
      .then((response) => setCharacterData(response.data.results))
      .catch((err) => console.error(err));
  };

  return (
    <div className={style.paginate}>
      <h1>hello world</h1>

      <CharacterTable
        characterData={characterData}
        page={page}
        setPage={setPage}
      />
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
