import React from "react";
import "./Photos.css";

export default function Photos(props) {
  //console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos row text-center">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col" key={index}>
              <a href={photo.url} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.tiny}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
