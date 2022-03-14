import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";
function Header() {
  const [user, setUser] = useState({});
  const [toggle, setToggle] = useState(false);
  const btnRef = useRef();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = () => {
    axios
      .get(`http://localhost:2345/user`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => res)
      .then(({ data }) => {
        // console.log("-------", data);
        setUser(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   console.log("-------------------", btnRef);
  return (
    <Navbar>
      <Link to="/">
        <Logo src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAB0CAMAAABE6mf9AAAB7FBMVEVMaXH////////n5+dwcHD///////////97e3v////////////////8/Pz+/v7///////+xsbH////////+/v7+/v7+/v729vbS0tLOzs7e3t6wsLD///8YGBjPz8/9/f3////7+/v////////8/Pzf39/4+Phubm7+/v7///85OTmSkpLLy8v////+/v7////Z2dn////6+vr39/fU1NT+/v6enp6lpaX9/f3////+/v719fX39/f8/Pz////////AwMD9/f3////9/f38/Pzb29v4+Pj39/f///////+3t7f8/Pze3t77+/uTk5P8/Pz4+Pjx8fH+/v7c3Nz5+fni4uL6+vr////5+fn///+qqqr09PT9/f3+/v7e3t7////8/Pz6+vr9/f3////7+/vn5+f6+vr+/v65ubn29vbMzMyhoaHb29vr6+vExMS2trb8/Pz7+/v7+/u2tra7u7vm5ub+/v6enp77+/v////////5+fn7+/v5+fmpqana2trZ2dnOzs76+vrLy8vl5eXW1tbJycnS0tL5+fn7+/vn5+f19fW9vb3Hx8f5+fn4+PjNzc3+/v7AwMDZ2dm1tbX5+fm2trb29vbe3t7p6em9vb3y8vLKysrT09Pc3Nz09PTh4eHIyMjm5ub///+stlOlAAAAo3RSTlMA9vsEAf3l/gL5UvDtEgnz7wP0wqWEijAcGiUJgAQUJNzOq+jrKOQIG64JUlTsmuKN3+AZDdkGFpbV4ToQIVC7Cg3SY3AgHgfEsh4VZcgOlAondSO7LCqo17YwNY6gj2hLRX/N0i/mWpnvElQ6Qj4+VnzpaBJP5UTCgcqqvIs6Fh5krSyESEZZ3dp3tzR68qOAh1CHS4VBS0pacG8hhHZdoqdl1QdEjAAACP1JREFUeF7tmvtf08gaxpNJ0iEkJb0BKEhDs0B7zmlrLRQoLZS0tmAFaFlABeQu53CABQQFkEXA+3W97eqq657tP3pmUjSUSitCPZ+zy/NTMszkyzvvO88kAwRBRUfqZTKRG5Gyo8lNEZT/lawjYY4gkNQ1FJoJd6ETJHIp4HQQIzJI5FYMRzh0iZyLaGC/AYSF3wCSSPyJIMeQYwjg+N0SALY49Z4jmR3jY5WOH50VsrxmRzwJs0CA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" />
      </Link>
      <NavMenu>
        <a>
          <Link to="/">STORE</Link>
        </a>
        <a>
          <a href="https://www.epicgames.com/site/en-US/epic-games-store-faq?sessionInvalidated=true">
            FAQ
          </a>
        </a>
        <a>
          <a href="https://www.epicgames.com/help/en-US/">HELP</a>
        </a>
      </NavMenu>
      <NavTools>
        <LanguageImage src="https://img.icons8.com/ios/50/ffffff/globe--v1.png" />

        <UserImage src="https://img.icons8.com/ios/60/ffffff/user--v2.png" />

        <SignIn>
          {localStorage.getItem("token") != null ? (
            <a
              style={{ userSelect: "none" }}
              onClick={() => {
                if (toggle) {
                  btnRef.current.style.display = "none";
                  setToggle(false);
                } else {
                  btnRef.current.style.display = "block";
                  setToggle(true);
                }
              }}
            >
              {user.displayName}
            </a>
          ) : (
            <Link to="/login">
              <a>SIGN IN</a>
            </Link>
          )}
        </SignIn>
        <div
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
          ref={btnRef}
          className="header_user_options"
        >
          <div>Logout</div>
        </div>
        <SubscribeButton>DOWNLOAD</SubscribeButton>
      </NavTools>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.nav`
  width: 95.5vw;
  height: 50px;
  background: #2a2a2a;
  display: flex;
  align-items: center;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
`;

const Logo = styled.img`
  width: 40px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  font-weight: 500;
  gap: 5px;

  a {
    display: flex;
    align-items: center;
    padding: 0 14px;
    cursor: pointer;
    color: #d5d5d5;
    font-size: 12px;
    text-decoration: none;
  }
  span {
    font-size: 10px;
    letter-spacing: 0.5px;
    color: #d5d5d5;
  }
`;

const NavTools = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: center;
  gap: 28px;
`;

const SearchImage = styled.img`
  cursor: pointer;
`;
const LanguageImage = styled.img`
  cursor: pointer;
  width: 22px;
  border-radius: 50%;
`;
const SubscribeButton = styled.button`
  padding: 5px 23px;
  background: blue;
  font-family: sans-serif;
  min-width: 140px;
  min-height: 40px;
  font-style: normal;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  border: none;
  color: white;
  cursor: pointer;
`;
const UserImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #37474f;
`;
const SignIn = styled.span`
  font-size: 12px;
  margin-right: 15px;
  margin-left: -15px;
  letter-spacing: 1;
  cursor: pointer;
  color: #d5d5d5;

  a {
    text-decoration: none;
    color: white;
  }
`;
