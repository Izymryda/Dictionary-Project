import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit} className="row">
            <input
              type="search"
              autoFocus={true}
              placeholder="Enter your word..."
              onChange={handleKeywordChange}
              className="col-10"
            />
            <input type="submit" value="Search" className="col" />
            <br />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, forest, plant ...
          </div>
        </section>
        <Results data={definition} />
      </div>
    );
  } else {
    load();
    return "Loading ...";
  }
}
