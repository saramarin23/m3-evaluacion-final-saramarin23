import React from "react";
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

export default Filters;
