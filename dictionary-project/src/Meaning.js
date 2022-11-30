import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";
import Example from "./Example.js";

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="m-3">
            <strong>Definition: </strong>
            <span>{definition.definition}</span>
            <br />
            <Example example={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
      <br />
    </div>
  );
}
