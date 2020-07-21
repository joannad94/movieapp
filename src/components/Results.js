import React from "react";
import Result from "./Result";
import "./Results.css";

function Results({ results, openPopup }) {
  return (
    <div className="results">
      {results.map((result) => {
        return (
          <Result
            title={result.title}
            key={result.id}
            image={result.poster_path}
            popularity={result.popularity}
            vote_count={result.vote_count}
            result={result}
            openPopup={openPopup}
          />
        );
      })}
    </div>
  );
}

export default Results;
