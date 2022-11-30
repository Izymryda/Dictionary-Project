import React from "react";
import "./Results.css";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";

export default function Results(props) {
  //console.log(props.data);
  if (props.data) {
    return (
      <div className="Results">
        <section>
          <h2>{props.data.word}</h2>
          <div className="mb-4">
            <span>Phonetic : {props.data.phonetic}</span>
            {props.data.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetics={phonetic} />
                </div>
              );
            })}
          </div>
        </section>
        <span>
          {props.data.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
