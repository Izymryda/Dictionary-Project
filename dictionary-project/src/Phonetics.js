import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  //console.log(props);
  if (props.phonetics.audio !== "") {
    return (
      <div className="Phonetics row align-items-center my-2">
        <ReactAudioPlayer
          src={props.phonetics.audio}
          controls
          className="col-7"
        />{" "}
        <span className="col">{props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
