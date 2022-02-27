import React from "react";
import "./SignUp.css";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
const SignUp = () => {
 
      const [inputData,setInputData] =  useState({});
      const [isError,setIsError] = useState(false);
       const navigate = useNavigate();
      const inputChange = (e)=>{
          const {name,value} = e.target;
          setInputData((prev)=>{
            return {...prev,[name]:value}
          });
      }
      const submitForm = ()=>{
        // console.log(inputData);
          axios.post("http://localhost:2345/signup",inputData).then(res=>res).then(({data})=>{
                if(data.status)
                {
                  //use signup successfull
                  console.log(data);
                  localStorage.setItem("token","Bearer "+data.token);
                  setIsError(false);
                     navigate('/');
                }
                else
                {
                  setIsError(true);
                }
          }).catch(e=>{
            setIsError(true);
            console.log(e);
          })
      }
  return (
    <div className="signup_main">
      <form onSubmit={(e)=>{
            e.preventDefault();
            submitForm();
      }} action="#" className="signup_card">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/icons/Epic_Games_white.svg" />
        </div>
        <div className="signup_title">
          <p>&nbsp;Sign Up</p>
        </div>
        <div className="signup_input-container">
          <div className="signup_inputBox">
            <input onChange={(e)=>inputChange(e)} name="firstName" type="text" placeholder="First Name *" />
            <input onChange={(e)=>inputChange(e)} name="lastName" type="text" placeholder="Last Name *" />
          </div>
          <div className="signup_inputBox">
            <input onChange={(e)=>inputChange(e)} name="displayName" type="text" placeholder="Display Name *" />
          </div>
          <div className="signup_inputBox">
            <input onChange={(e)=>inputChange(e)} name="email" type="text" placeholder="Email Address *" />
          </div>
          <div className="signup_inputBox">
            <input onChange={(e)=>inputChange(e)} name="password" type="password" placeholder="Password *" />
          </div>
        </div>
        <div className="signup_remember">
          <div className="signup_input">
            <input type="checkbox" />
            &nbsp;
              I would like to receive news, surveys and special offers from Epic
              Games.
           
          </div>
        </div>
      <br/>
        <div className="signup_remember">
          <div className="signup_input">
            <input type="checkbox" />
            <a className="signup_terms">&nbsp;
              I have read and agree to the terms of service
            </a>
          </div>
        </div>
        <div className="signup_continueBtn">
        {
          isError?<a><h3 id="signup_error">Something is wrong! try again</h3><br/></a>:""
        }
          <button type="Submit">CONTINUE</button>
        </div>
        <div className="signup_privacy">
          <p>Privacy Policy</p>
        </div>
        <div className="signup_new">
          <p className="signup_acc">
           Have an Epic Games Account ? <Link to="/login"><span>Login</span></Link>
          </p>
          <p className="signup_p2">
            Back to <a href="#">all sign up options</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
