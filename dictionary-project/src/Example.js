import React from "react";
export default function Example(props) {
  if (props.example) {
    return (
      <span>
        <em>
          <strong>Example: </strong>
          {props.example}
        </em>
        <br />
      </span>
    );
  } else {
    return null;
  }
}
