import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="m-3">
            <strong>Definition: </strong>
            <span>{definition.definition}</span>
            <br />
            <span>
              <em>
                <strong>Example: </strong>
                {definition.example != null ? definition.example : "None"}
              </em>
            </span>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
      <br />
    </div>
  );
}
