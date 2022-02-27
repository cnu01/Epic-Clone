import React from "react";
import "./MovieCards.css";

function MovieCards(props) {
  return (
    <>
      <div className="contain">
        <div className="boxes">
          <img src={props.imgsrc} />
          <p>{props.title}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </>
  );
}

export default MovieCards;
