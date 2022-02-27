import React from "react";
import "./SignUp.css";
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
 
      const [inputData,setInputData] =  useState({});
      const [isError,setIsError] = useState(false);
      // const navigate = useNavigate();
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
                    // navigate('/home');
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
    <div>
      <form onSubmit={(e)=>{
            e.preventDefault();
            submitForm();
      }} action="#" className="signup_card">
        <div className="logo">
          <img src="https://raw.githubusercontent.com/mansisindhu/epic-games/f4eed54dfd6e0d2bc890518366b048ec20b2b72e/public/icons/Epic_Games_white.svg" />
        </div>
        <div className="title">
          <p>Sign Up</p>
        </div>
        <div className="input-container">
          <div className="inputBox">
            <input onChange={(e)=>inputChange(e)} name="firstName" type="text" placeholder="First Name *" />
            <input onChange={(e)=>inputChange(e)} name="lastName" type="text" placeholder="Last Name *" />
          </div>
          <div className="inputBox">
            <input onChange={(e)=>inputChange(e)} name="displayName" type="text" placeholder="Display Name *" />
          </div>
          <div className="inputBox">
            <input onChange={(e)=>inputChange(e)} name="email" type="text" placeholder="Email Address *" />
          </div>
          <div className="inputBox">
            <input onChange={(e)=>inputChange(e)} name="password" type="password" placeholder="Password *" />
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
        {
          isError?<a><h3 id="signup_error">Something is wrong! try again</h3><br/></a>:""
        }
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
