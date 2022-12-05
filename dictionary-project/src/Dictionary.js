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
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit} className="row justify-content-between">
            <input
              type="search"
              autoFocus={true}
              placeholder="Enter your word..."
              onChange={handleKeywordChange}
              className="col-9"
              defaultValue={props.defaultKeyword}
            />
            <input type="submit" value="Search" className="col-2" />
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
