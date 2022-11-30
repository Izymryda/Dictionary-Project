import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.phonetics.audio !== "") {
    return (
      <div className="Phonetics row align-items-center">
        <ReactAudioPlayer
          src={props.phonetics.audio}
          controls
          className="col-4"
        />{" "}
        <span className="col">{props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
