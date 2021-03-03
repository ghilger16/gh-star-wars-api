import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterTable from "./Components/CharacterTable";

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    getCharacterData();
  }, [query]);

  const getCharacterData = async () => {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    setCharacterData(data.results);
    console.log(data);
  };
  return (
    <div>
      <h1>hello world</h1>
      <CharacterTable characterData={characterData} />
    </div>
  );
};

export default App;
