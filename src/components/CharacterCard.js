import React from "react";
import PropTypes from "prop-types";
import "./../stylesheets/CharacterCard.scss";

const CharacterCard = props => {
  const { character } = props;
  return (
    <li className="App__List--c" key={character.id}>
      <img
        className="App__List--c-photo"
        src={character.image}
        alt={character.name}
      />
      <div className="App__List--c-card">
        <h2 className="App__List--c-name">{character.name}</h2>
        <p className="App__List--c-specie">{character.species}</p>
      </div>
    </li>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterCard;
