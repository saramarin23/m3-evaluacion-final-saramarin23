import React from "react";
import PropTypes from "prop-types";
import "./../stylesheets/Filters.scss";

const Filters = props => {
  const { inputSearch, handleSelect } = props;
  return (
    <div className="input-container">
      <input
        className="input"
        type="search"
        placeholder="busca tu personaje favorito"
        onChange={inputSearch}
      />
      <select htmlFor="select" onChange={handleSelect}>
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
  );
};

Filters.propTypes = {
  inputSearch: PropTypes.func
};

export default Filters;
