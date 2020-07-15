import React from "react";

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
        <h1>{selected.title}</h1>
        <span> Kraj produkcji: {countries}</span>
        <span> Rodzaj: {genres.join(" ")} </span>

        <div className="plot">
          <img
            src={`https://image.tmdb.org/t/p/w300/${selected.poster_path}`}
            alt="poster"
          />
          <p>{selected.overview}</p>
          <br />
          <a
            href={`https://www.imdb.com/title/${selected.imdb_id}/`}
            target="blank"
          >
            Zobacz na IMDB
          </a>
        </div>

        <button className="close" onClick={closePopup}>
          Zamknij
        </button>
      </div>
    </section>
  );
}

export default Popup;
