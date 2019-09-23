import React from "react";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

const Home = props => {
  const { data, query, inputSearch } = props;
  return (
    <React.Fragment>
      <h1>Bienvenido</h1>
      <Header />
      <Filters inputSearch={inputSearch} />
      <CharacterList character={data} query={query} />
    </React.Fragment>
  );
};

export default Home;
