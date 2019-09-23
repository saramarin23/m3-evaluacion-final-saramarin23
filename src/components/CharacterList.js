import React from "react";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

const CharacterList = props => {
  const { character, query } = props;
  return (
    <ul className="App__List">
      {character
        .filter(myCharacter =>
          myCharacter.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((character, index) => {
          return (
            <Link
              key={index}
              to={`/character-detail/${character.id}`}
              className="character__link"
            >
              <CharacterCard key={index} character={character} />
            </Link>
          );
        })}
    </ul>
  );
};

export default CharacterList;
