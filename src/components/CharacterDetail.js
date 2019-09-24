import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./../stylesheets/CharacterDetail.scss";

const CharacterDetail = props => {
  const { routerProps, data } = props;
  const characterID = parseInt(routerProps.match.params.id);
  const character = data.filter(item => item.id === characterID);
  if (character[0]) {
    const { name, image, species, origin, episode, status } = character[0];
    return (
      <React.Fragment>
        <div className="details-links">
          <Header />
          <Link to="/" className="app__back">
            <div className="back-container">
              <img
                className="logo-home"
                src="./home-photo.png"
                alt="Volver a la home"
              />
              <h2>Volver</h2>
            </div>
          </Link>
        </div>
        <div className="character-details--card">
          <div className="character-img_container">
            <img className="character-img" src={image} alt={name} />
          </div>
          <div className="character-details">
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Origin: {origin.name}</p>
            <p>Episodes: {episode.length}</p>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="details-links">
          <Header />
          <Link to="/" className="app__back">
            <div className="back-container">
              <img
                className="logo-home"
                src="./home-photo.png"
                alt="Volver a la home"
              />
              <h2>Volver</h2>
            </div>
          </Link>
        </div>
        <div>
          <img className="facepalm-gif" src="./facepalm.gif" alt="Error" />
          <p>Ese personaje no existe</p>
        </div>
      </React.Fragment>
    );
  }
};

export default CharacterDetail;
