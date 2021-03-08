import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterTable = ({ characterData, planetData }) => {
  const getHomeWorld = (homeworld) => {
    return planetData.map((planet) => {
      if (homeworld === planet.url) {
        return planet.name;
      }
    });
  };

  const renderTableData = () => {
    return characterData.map((character) => {
      const { name, birth_year, height, mass, homeworld } = character;

      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{birth_year}</td>
          <td>{height}</td>
          <td>{mass}</td>
          <td>{getHomeWorld(homeworld)}</td>
        </tr>
      );
    });
  };

  return (
    <table className="table table-hover table-lg">
      <thead className="thead-light">
        <tr>
          <th>Name</th>
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
