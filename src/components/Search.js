import React, { useRef } from "react";
import "./Search.css";

const Search = ({ getMoviesFromApi }) => {
  const searchInput = useRef(null);

  const handleInput = (e) => {
    if (e.key === "Enter") {
      getMoviesFromApi(e.target.value);
    }
  };
  return (
    <div className="searchbox-wrap d-flex justify-content-center align-items-center">
      <input
        type="text"
        ref={searchInput}
        className="searchbox"
        placeholder="szukaj filmu..."
        onChange={handleInput}
        onKeyPress={handleInput}
      />
      <button
        className="searchclick"
        onClick={() => getMoviesFromApi(searchInput?.current.value)}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
