import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const CharacterDetail = props => {
  const { routerProps, data } = props;
  console.log(data);
  const characterID = parseInt(routerProps.match.params.id);
  const character = data.filter(item => item.id === characterID);
  if (character[0]) {
    const { name, image, species, origin, episode } = character[0];
    console.log(character);
    return (
      <React.Fragment>
        <Header />
        <Link to="/" className="app__back">
          <div>
            <img
              className="logo-home"
              src="./home-photo.png"
              alt="Volver a la home"
            />
            <h2>Volvamos a la home</h2>
          </div>
        </Link>
        <div className="character-details">
          <h2>{name}</h2>
          <div>
            <img className="character-img" src={image} alt={name} />
          </div>
          <p>{species}</p>
          <p>{origin.name}</p>
          <p>{episode.length}</p>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Header />
        <Link to="/" className="app__back">
          <img
            className="logo-home"
            src="./home-photo.png"
            alt="Volver a la home"
          />
          Volvamos a la home
        </Link>
        <div>
          <img className="facepalm-gif" src="./facepalm.gif" alt="Error" />
          <p>Ese personaje no existe</p>
        </div>
      </React.Fragment>
    );
  }
};

export default CharacterDetail;
