const CharacterTable = ({ characterData, planetData, speciesData }) => {
  const getHomeWorld = (homeworld) => {
    return planetData.map((planet) => {
      if (homeworld === planet.url) {
        return planet.name;
      }
    });
  };

  const getSpeciesData = (species) => {
    return speciesData.map((speciesData) => {
      if (species === speciesData.url) {
        return speciesData.name;
      }
    });
  };

  const renderTableData = () => {
    return characterData.map((character) => {
      const { name, birth_year, height, mass, homeworld, species } = character;

      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{birth_year}</td>
          <td>{height}</td>
          <td>{mass}</td>
          <td>{getHomeWorld(homeworld)}</td>
          {species[0] ? (
            <td>{getSpeciesData(species.toString(species))}</td>
          ) : (
            <td>Human</td>
          )}
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
          <th>Species</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

export default CharacterTable;
