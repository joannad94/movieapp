import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(1);

  const apikey = `${process.env.REACT_APP_API_KEY}`;

  const search = (e) => {
    if (e.key === "Enter") {
      axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`
      ).then(({ data }) => {
        setResults(data.results);
      });
    }
  };

  const handleInput = (e) => {
    let query = e.target.value;
    setQuery(query);
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

  const sortByPopularity = () => {
    if (results && results.length > 0) {
      if (sort) {
        const revResults = results.reverse();

        setResults(revResults);
        setSort({ sort: -1 });
      } else {
        const upResults = results.sort((a, b) =>
          a.popularity < b.popularity ? -1 : a.popularity > b.popularity ? 1 : 0
        );
        setResults(upResults);
        setSort(sort);
      }
    }
  };

  const sortByTitle = () => {
    if (results && results.length > 0) {
      if (sort) {
        const revResults = results.reverse();

        setResults(revResults);
        setSort({ sort: -1 });
      } else {
        const upResults = results.sort((a, b) =>
          a.title < b.title ? -1 : a.title > b.title ? 1 : 0
        );
        setResults(upResults);
        setSort(sort);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Baza filmów</h1>
      </header>
      <main>
        {results.length > 0 && (
          <section className="sort">
            Sortuj wg:
            <br />
            <button onClick={sortByPopularity}>Popularność</button>
            <button onClick={sortByTitle}>Tytuł</button>
          </section>
        )}

        <Search handleInput={handleInput} search={search} />
        <Results results={results} openPopup={openPopup} />

        {selected && <Popup selected={selected} closePopup={closePopup} />}

        {results.length > 0 && (
          <button onClick={getNextPage}>Pokaż więcej</button>
        )}
      </main>
    </div>
  );
}

export default App;
