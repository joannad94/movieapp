import React from "react";
import "./Result.css";

function Result({ title, image, popularity, vote_count, openPopup, result }) {
  return (
    <div className="result" onClick={() => openPopup(result.id)}>
      <div className="poster">
        {image ? (
          <img
            className="img"
            src={`https://image.tmdb.org/t/p/w300/${image}`}
            alt="plakat"
          />
        ) : (
          <img
            className="noimg"
            src="/movieapp/no-image.jpg"
            alt="brak zdjęcia"
          />
        )}
        <h3>{title}</h3>
      </div>

      <div className="info">
        <p>popularność: {Math.round(popularity)} %</p>
        <p>liczba głosów: {vote_count}</p>
      </div>
    </div>
  );
}

export default Result;
