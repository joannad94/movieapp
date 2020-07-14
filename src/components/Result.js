import React from "react";

function Result({ title, image, vote_average, vote_count, openPopup, result }) {
  return (
    <div className="result" onClick={() => openPopup(result.id)}>
      <img src={`https://image.tmdb.org/t/p/w300/${image}`} alt="poster" />
      <h3>{title}</h3>
      <p>średnia ocena: {vote_average} </p>
      <p>liczba głosów: {vote_count}</p>
    </div>
  );
}

export default Result;
