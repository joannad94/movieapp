import React from "react";

function Result({ result }) {
  return (
    <div className="result">
      <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} />
      <h3>{result.title}</h3>
    </div>
  );
}

export default Result;
