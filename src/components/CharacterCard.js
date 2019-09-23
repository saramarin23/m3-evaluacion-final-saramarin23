import React from "react";

const CharacterCard = props => {
  const { character } = props;
  return (
    <li className="App__List--c" key={character.id}>
      <img
        className="App__List--c-photo"
        src={character.image}
        alt={character.name}
      />
      <h2 className="App__List--c-name">{character.name}</h2>
      <p className="App__List--c-specie">{character.species}</p>
    </li>
  );
};

export default CharacterCard;
