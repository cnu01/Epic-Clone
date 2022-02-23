import React from "react";
import "./MovieCard.css";

const MovieCard = () => {
  return (
    <>
      <h4>Release Radar</h4>
      <div className="container">
        <div className="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU" />
          <p>Clash of Clan</p>
          <p>₹3,399</p>
        </div>

        <div className="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU" />
          <p>Clash of Clan</p>
          <p>₹3,399</p>
        </div>

        <div className="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU" />
          <p>Clash of Clan</p>
          <p>₹3,399</p>
        </div>

        <div className="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmUlRMoqOYmyeW5EI5JRn2ApjrBsUWDgp4A&usqp=CAU" />
          <p>Clash of Clan</p>
          <p>₹3,399</p>
        </div>
      </div>

      <div className="container">
        <div className="box-2">
          <img src="https://i.ytimg.com/vi/Ipd3FhZaYtI/maxresdefault.jpg" />
          <p>Voidtrain - Save 20%</p>
          <p>
            Fend off reckless attempts to capture your train in Voidtrain:
            Railroad Duel update! Save 20% now!
          </p>
          <button>-20%</button>
          <span className="overwrite">₹709 </span>
          <span>₹567.20</span>
        </div>

        <div className="box-2">
          <img src="https://i.ytimg.com/vi/Ipd3FhZaYtI/maxresdefault.jpg" />
          <p>Voidtrain - Save 20%</p>
          <p>
            Fend off reckless attempts to capture your train in Voidtrain:
            Railroad Duel update! Save 20% now!
          </p>
          <button>-20%</button>
          <span className="overwrite">₹709 </span>
          <span>₹567.20</span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
