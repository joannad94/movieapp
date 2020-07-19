import React from "react";
import "./Result.css";

function Result({ title, image, popularity, vote_count, openPopup, result }) {
  return (
    <div className="result" onClick={() => openPopup(result.id)}>
      
      <section className="poster">
      <img
        classNme="img"
        src={`https://image.tmdb.org/t/p/w300/${image}`}
        alt="ten film nie posiada plakatu"
      />
      <h3>{title}</h3>
      </section>
      
      <section className="info">
      <p>popularność: {Math.round(popularity)} %</p>
      <p>liczba głosów: {vote_count}</p>
      </section>

    </div>
  );
}

export default Result;
