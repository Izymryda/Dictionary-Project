import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [definition, setDefinition] = useState("");

  function handleResponse(response) {
    setDefinition(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();
    //alert(`Searching for ${keyword} definition`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter your word..."
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" />
        <br />
        <Results data={definition} />
      </form>
    </div>
  );
}
