import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setDefinition(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
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
    axios.get(apiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001d215d620396e4a5d9d3a55d13b63d663";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    axios
      .get(pexelsApiUrl, { headers: { Authorization: pexelsApiKey } })
      .then(handlePexelsResponse);
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
            <input type="submit" value="Search" className="col-2 but" />
            <br />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, forest, plant ...
          </div>
        </section>
        <Results data={definition} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading ...";
  }
}
