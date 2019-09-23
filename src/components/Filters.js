import React from "react";

const Filters = props => {
  const { inputSearch } = props;
  return (
    <div className="input-container">
      <input
        className="input"
        type="search"
        placeholder="search your favorite character"
        onChange={inputSearch}
      />
    </div>
  );
};

export default Filters;
