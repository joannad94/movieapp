import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
import { Button, Container } from "react-bootstrap";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(0);

  const apikey = `${process.env.REACT_APP_API_KEY}`;

  const getMoviesFromApi = (inputQuery) => {
    setQuery(inputQuery);

    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${inputQuery}`
    ).then(({ data }) => {
      setResults(data.results);
    });
  };

  const openPopup = (id) => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=pl`
    ).then(({ data }) => {
      setSelected(data);
    });
  };

  const closePopup = () => {
    setSelected(null);
  };

  const getNextPage = () => {
    const nextPage = page + 1;
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}&page=${nextPage}`
    ).then(({ data }) => {
      const updatedResults = [...results, ...data.results];
      setResults(updatedResults);
      setPage(nextPage);
    });
  };

  const sortMoviesBy = (type) => {
    if (sort) {
      const revResults = [...results].reverse();
      setResults(revResults);
      setSort(0);
    } else {
      const sortedResults = [...results].sort((a, b) =>
        typeof a[type] === "string"
          ? a[type].localeCompare(b[type])
          : b[type] - a[type]
      );

      setResults(sortedResults);
      setSort(1);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>
          Szukajka filmów z <span>IMDb</span>
        </h1>
      </header>
      <main>
        <Container>
          <Search getMoviesFromApi={getMoviesFromApi} />

          {results.length > 0 && (
            <div className="sort">
              <span>Sortuj wg: </span>
              <br />

              <Button
                className="popularity"
                variant="out-line-primary"
                onClick={() => sortMoviesBy("popularity")}
              >
                Popularność
              </Button>

              <Button
                className="title"
                variant="out-line-promary"
                onClick={() => sortMoviesBy("title")}
              >
                Tytuł
              </Button>
            </div>
          )}

          <Results results={results} openPopup={openPopup} />

          {selected && <Popup selected={selected} closePopup={closePopup} />}

          {results.length > 0 && (
            <button className="next" onClick={getNextPage}>
              Pokaż więcej
            </button>
          )}
        </Container>
      </main>
    </div>
  );
}

export default App;
