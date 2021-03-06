import React, { useState } from "react";
import axios from "axios";

const CharacterTable = ({ characterData, setPage, page }) => {
  const [homeWorld, setHomeWorld] = useState([]);

  const getHomeWorld = (homeworld) => {
    axios
      .get(`${homeworld}?name`)
      .then((response) => setHomeWorld(response))
      .catch((err) => console.error(err));
  };

  const renderTableData = () => {
    return characterData.map((character) => {
      const { name, birth_year, height, mass, homeworld } = character;
      return (
        <tr>
          <td>{name}</td>
          <td>{birth_year}</td>
          <td>{height}</td>
          <td>{mass}</td>
          {/* <td>{getHomeWorld(homeworld)}</td> */}
          <td>{homeworld}</td>
        </tr>
      );
    });
  };

  return (
    <table class="table table-hover table-lg">
      <thead class="thead-light">
        <tr>
          <th onClick={(e) => setPage(page + 1)}>Name</th>
          <th>Birth Date</th>
          <th>Height</th>
          <th>Mass</th>
          <th>HomeWorld</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

export default CharacterTable;
