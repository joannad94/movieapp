import React from "react";
import Result from "./Result";

function Results({ results, openPopup }) {
  return (
    <section className="results">
      {results.map((result) => {
        return (
          <Result
            title={result.title}
            key={result.id}
            image={result.poster_path}
            vote_average={result.vote_average}
            vote_count={result.vote_count}
            result={result}
            openPopup={openPopup}
          />
        );
      })}
    </section>
  );
}

export default Results;
