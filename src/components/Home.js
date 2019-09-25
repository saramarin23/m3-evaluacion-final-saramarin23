import React from "react";
import Header from "./Header";
import Filters from "./Filters";
import PropTypes from "prop-types";
import CharacterList from "./CharacterList";

const Home = props => {
  const { data, query, inputSearch, handleSelect, gender } = props;
  console.log(props);
  return (
    <React.Fragment>
      <Header />
      <Filters inputSearch={inputSearch} handleSelect={handleSelect} />
      <CharacterList character={data} query={query} gender={gender} />
    </React.Fragment>
  );
};

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputSearch: PropTypes.func,
  query: PropTypes.string
};

export default Home;
