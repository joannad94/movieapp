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

  const apiurl =
    "https://api.themoviedb.org/3/search/movie?api_key=59b3036760639d53bfc449c761da9443";

  const apikey = "59b3036760639d53bfc449c761da9443";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&query=" + query).then(({ data }) => {
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
    console.group(page);
    const nextPage = page + 1;
    setPage(nextPage);
    console.log(page);

    axios(apiurl + "&query=" + query + "&page=" + page + 1).then(({ data }) => {
      const updatedResults = [...results, ...data.results];
      setResults(updatedResults);
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Baza filmów</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={results} openPopup={openPopup} />

        {selected && <Popup selected={selected} closePopup={closePopup} />}

        {results.length && <button onClick={getNextPage}>Pokaż więcej</button>}
      </main>
    </div>
  );
}

export default App;
