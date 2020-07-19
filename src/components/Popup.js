import React from "react";
import "./Popup.css";

function Popup({ selected, closePopup }) {
  const countries = selected.production_countries.map((country) => {
    return country.name;
  });

  const genres = selected.genres.map((genre) => {
    return genre.name;
  });
  return (
    <section className="popup">
      <div className="content">
        <section className="name">
          <h1>{selected.title}</h1>
          <p>Kraj produkcji:</p>
          <span className="info">{countries}</span>
          <p>Rodzaj:</p>
          <span className="info">{genres.join(" ")}</span>
        </section>

        <div className="plot">
          <img
            src={`https://image.tmdb.org/t/p/w200/${selected.poster_path}`}
            alt="poster"
          />
          <p>{selected.overview}</p>
          <br />
        </div>
        <a
          href={`https://www.imdb.com/title/${selected.imdb_id}/`}
          target="blank"
        >
          Zobacz na IMDB
        </a>

        <button className="close" onClick={closePopup}>
          Zamknij
        </button>
      </div>
    </section>
  );
}

export default Popup;
