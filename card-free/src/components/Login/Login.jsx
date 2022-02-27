import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isError,setIsError] = useState(false);
  // const navigate = useNavigate();
  const submitForm = ()=>{
    
        axios.post("http://localhost:2345/login",{email,password}).then((res)=>res).then(({data})=>{
          if(data.status)
          {
            console.log("data ",data);
            localStorage.setItem("token","Bearer "+data.token);
            setIsError(false);
            // navigate("/home");
          }
          else
          {
            setIsError(true);
          }
          
        }).catch(e=>{
          setIsError(true);
          console.log(e);
        });
      
  }
  return (
    <div>
      <div action="#" className="login_card">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/icons/Epic_Games_white.svg" />
        </div>
        <div className="title">
          <p>Sign in with an Epic Games Account</p>
        </div>
        <div className="input-container">
          <div className="inputBox">
            <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email Address" />
          </div>
          <div className="inputBox">
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
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
          {
            isError?<a><h3 id="login_error">Something is wrong! try again</h3><br/></a>:""
          }
          <button type="Submit" onClick={submitForm}>Log In Now</button>
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
      </div>
    </div>
  );
};

export default Login;
