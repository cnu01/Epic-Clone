import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <form action="#" className="card">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/icons/Epic_Games_white.svg" />
        </div>
        <div className="title">
          <p>Sign Up</p>
        </div>
        <div className="input-container">
          <div className="inputBox">
            <input type="text" placeholder="First Name *" />
            <input type="text" placeholder="Last Name *" />
          </div>
          <div className="inputBox">
            <input type="text" placeholder="Display Name *" />
          </div>
          <div className="inputBox">
            <input type="text" placeholder="Email Address *" />
          </div>
          <div className="inputBox">
            <input type="password" placeholder="Password *" />
          </div>
        </div>
        <div className="remember">
          <div className="input">
            <input type="checkbox" />
            <span>
              I would like to receive news, surveys and special offers from Epic
              Games.
            </span>
          </div>
        </div>

        <div className="remember">
          <div className="input">
            <input type="checkbox" />
            <span className="terms">
              I have read and agree to the <span>terms of service</span>
            </span>
          </div>
        </div>
        <div className="continueBtn">
          <button type="Submit">CONTINUE</button>
        </div>
        <div className="privacy">
          <p>Privacy Policy</p>
        </div>
        <div className="new">
          <p className="acc">
            Don't have an Epic Games Account ? <span>SignUp</span>
          </p>
          <p className="p2">
            Back to <a href="#">all sign up options</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
