import React, { useState } from "react";

const CharacterTable = ({ characterData }) => {
  const renderTableData = () => {
    return characterData.map((character) => {
      const { name, birth_year, height, mass, homeworld } = character;
      return (
        <tr>
          <td>{name}</td>
          <td>{birth_year}</td>
          <td>{height}</td>
          <td>{mass}</td>
          <td>{homeworld}</td>
        </tr>
      );
    });
  };

  return (
    <table class="table table-hover table-lg">
      <thead class="thead-light">
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
