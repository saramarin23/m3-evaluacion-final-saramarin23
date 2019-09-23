import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  const { character, query } = props;
  return (
    <ul className="App__List">
      {character
        .filter(myCharacter =>
          myCharacter.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((character, index) => {
          return <CharacterCard key={index} character={character} />;
        })}
    </ul>
  );
};

export default CharacterList;
