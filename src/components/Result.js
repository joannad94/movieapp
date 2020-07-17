import React from "react";

function Result({ title, image, popularity, vote_count, openPopup, result }) {
  return (
    <div className="result" onClick={() => openPopup(result.id)}>
      <img src={`https://image.tmdb.org/t/p/w300/${image}`} alt="poster" />
      <h3>{title}</h3>
      <p>popularność: {Math.round(popularity)} %</p>
      <p>liczba głosów: {vote_count}</p>
    </div>
  );
}

export default Result;
