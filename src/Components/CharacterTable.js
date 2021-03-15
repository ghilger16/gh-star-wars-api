const CharacterTable = ({ characters }) => {
  const tableData = characters.map((character) => (
    <tr key={character.name}>
      <td>{character.name}</td>
      <td>{character.birth_year}</td>
      <td>{character.height}</td>
      <td>{character.mass}</td>
      <td>{character.homeworld}</td>
      <td>{character.species}</td>
    </tr>
  ));

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
      <tbody>{tableData}</tbody>
    </table>
  );
};

export default CharacterTable;
