import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <form action="#" className="card">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/icons/Epic_Games_white.svg" />
        </div>
        <div className="title">
          <p>Sign in with an Epic Games Account</p>
        </div>
        <div className="input-container">
          <div className="inputBox">
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="inputBox">
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="remember">
          <div className="input">
            <input type="checkbox" /> <span>Remember me</span>
          </div>
          <div className="forgot">
            <p>Forgot Your Password </p>
          </div>
        </div>
        <div className="loginBtn">
          <button type="Submit">Log In Now</button>
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

export default Login;
