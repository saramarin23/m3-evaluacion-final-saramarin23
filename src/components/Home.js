import React from "react";
import Header from "./Header";
import Filters from "./Filters";
import PropTypes from "prop-types";
import CharacterList from "./CharacterList";

const Home = props => {
  const { data, query, inputSearch } = props;
  return (
    <React.Fragment>
      <Header />
      <Filters inputSearch={inputSearch} />
      <CharacterList character={data} query={query} />
    </React.Fragment>
  );
};

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputSearch: PropTypes.func,
  query: PropTypes.string
};

export default Home;
