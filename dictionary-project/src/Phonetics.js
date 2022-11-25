import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics row align-items-center">
      <ReactAudioPlayer src={props.phonetics.audio} controls className="col" />{" "}
      <span className="col">{props.phonetics.text}</span>
    </div>
  );
}
