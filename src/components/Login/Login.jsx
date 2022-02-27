import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isError,setIsError] = useState(false);
   const navigate = useNavigate();
  const submitForm = ()=>{
        axios.post("http://localhost:2345/login",{email,password}).then((res)=>res).then(({data})=>{
          if(data.status)
          {
            // console.log("data ",data);
            localStorage.setItem("token","Bearer "+data.token);
            setIsError(false);
            navigate("/");
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
    <div className="login_main">
      <div action="#" className="login_card">
        <div className="login_logo">
          <img src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/icons/Epic_Games_white.svg" />
        </div>
        <div className="login_title">
          <p>Sign in with an Epic Games Account</p>
        </div>
        <div className="login_input-container-123">
          <div className="login_inputBox-123">
            <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email Address" />
          </div>
          <div className="login_inputBox-123">
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
          </div>
        </div>
        <div className="login_remember">
          <div className="login_input">
            <input type="checkbox" /> <span>Remember me</span>
          </div>
          <div className="login_forgot">
            <p>Forgot Your Password </p>
          </div>
        </div>
        <div className="login_loginBtn">
          {
            isError?<a><h3 id="login_error">Something is wrong! try again</h3><br/></a>:""
          }
          <button type="Submit" onClick={submitForm}>Log In Now</button>
        </div>
        <div className="login_privacy">
          <p>Privacy Policy</p>
        </div>
        <div className="login_new">
          <p className="login_acc">
          <span> Don't have an Epic Games Account ? <Link to="/signup">&nbsp;<a>SignUp</a></Link></span>
          </p>
          <p className="login_p2">
             <a href="#">sign up options</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
