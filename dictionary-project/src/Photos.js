import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos row">
        {props.photos.map(function (photo, index) {
          return (
            <img
              src={photo.src.tiny}
              key={index}
              alt={photo.alt}
              className="col"
            />
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
