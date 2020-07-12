import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [state, setState] = useState({
    query: "",
    results: [],
    selected: {},
  });
  const apiurl =
    "https://api.themoviedb.org/3/search/movie?api_key=59b3036760639d53bfc449c761da9443";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&query=" + state.query).then(({ data }) => {
        let results = data.results;
        setState((prevState) => {
          return { ...prevState, results: results };
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
  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
