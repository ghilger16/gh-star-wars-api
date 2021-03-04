import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterTable from "./Components/CharacterTable";

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  const [homeworldData, setHomeWorldData] = useState([]);
  const [query, setQuery] = useState([]);

  console.log(characterData);

  useEffect(() => {
    getSwapi();
  }, [query]);

  const getSwapi = () => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => setCharacterData(response.data.results))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1>hello world</h1>
      {/* <CharacterTable characterData={characterData} /> */}
    </div>
  );
};

export default App;
