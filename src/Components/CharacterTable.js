const CharacterTable = ({ characterData, planetData, speciesData }) => {
  const getHomeWorld = (homeworld) => {
    return planetData.map((planet) => {
      if (homeworld === planet.url) {
        return planet.name;
      }
    });
  };

  const getSpeciesData = (url) => {
    return speciesData.map((species) => {
      return species.people.map((person) => {
        if (url === person) {
          return species.name;
        }
      });
    });
  };

  const renderTableData = () => {
    return characterData.map((character) => {
      const { name, birth_year, height, mass, homeworld, url } = character;

      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{birth_year}</td>
          <td>{height}</td>
          <td>{mass}</td>
          <td>{getHomeWorld(homeworld)}</td>
          <td>{getSpeciesData(url)}</td>
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
