import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms.length !== 0) {
    <strong>Synonims: </strong>;
    {
      props.synonyms.map(function (synonym, index) {
        return (
          <div key={index}>
            <span>{synonym}</span>
          </div>
        );
      });
    }
  } else {
    return null;
  }
}
