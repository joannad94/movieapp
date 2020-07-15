import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    query: "",
    results: [],
    selected: {},
    page: 0,
  });
  const apiurl =
    "https://api.themoviedb.org/3/search/movie?api_key=59b3036760639d53bfc449c761da9443";

  const apikey = "59b3036760639d53bfc449c761da9443";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&query=" + state.query).then(({ data }) => {
        let results = data.results;
        setState((prevState) => {
          return {
            ...prevState,
            results: results,
          };
        });
      });
    }
  };

  const handleInput = (e) => {
    let query = e.target.value;

    setState((prevState) => {
      return { ...prevState, query: query };
    });
  };

  const openPopup = (id) => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=pl`
    ).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };
  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  const nextPage = () => {
    axios(apiurl + "&query=" + state.query + "&page=" + state.page + 1).then(
      ({ data }) => {
        let results = data.results;
        setState((prevState) => {
          return {
            ...prevState,
            results: [...state.results, ...results],
          };
        });
      }
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Baza filmów</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
        <button onClick={nextPage}>Pokaż więcej</button>
      </main>
    </div>
  );
}

export default App;
