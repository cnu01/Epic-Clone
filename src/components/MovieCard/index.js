import React from "react";
import ReactDOM from "react-dom";
import MovieCards from "./MovieCards";
import "./MovieCards.css";

export const Card = () => {
  return (
    <>
      <h4>Release Radar</h4>
      <div className="main-contain">
        <MovieCards
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU"
          title="Clash of Clan"
          price="₹3,399"
        />
        <MovieCards
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU"
          title="Clash of Clan"
          price="₹3,399"
        />
        <MovieCards
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU"
          title="Clash of Clan"
          price="₹3,399"
        />
        <MovieCards
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU"
          title="Clash of Clan"
          price="₹3,399"
        />
      </div>
    </>
  );
};
