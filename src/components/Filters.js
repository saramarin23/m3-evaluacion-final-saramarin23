import React from "react";
import PropTypes from "prop-types";
import "./../stylesheets/Filters.scss";

const Filters = props => {
  const { inputSearch } = props;
  return (
    <div className="input-container">
      <input
        className="input"
        type="search"
        placeholder="busca tu personaje favorito"
        onChange={inputSearch}
      />
    </div>
  );
};

Filters.propTypes = {
  inputSearch: PropTypes.func
};

export default Filters;
