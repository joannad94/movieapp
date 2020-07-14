import React from "react";

const Search = ({ handleInput, search }) => {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        className="searchbox"
        placeholder="szukaj filmu..."
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
};

export default Search;
