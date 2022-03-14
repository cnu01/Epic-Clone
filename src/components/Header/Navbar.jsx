import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
export const Navbar = () => {
  const [mainData, setMainData] = useState([]);
  const navigate = useNavigate();

  const getData = (e) => {
    let { value } = e.target;
    axios
      .get(`http://localhost:2345/games/search?text=${value}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => res)
      .then(({ data }) => {
        setMainData(data.data);
        // console.log("data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const debounce = (fn, delay) => {
    let timer;
    return function () {
      let context = this;
      let args = arguments;
      clearInterval(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };
  const searchHandle = useCallback(debounce(getData, 300), []);
  return (
    <Nav>
      <Search
        placeholder="Search"
        onChange={(e) => {
          let value = e.target.value;
          if (value.length == 0) {
            setMainData([]);
          } else {
            searchHandle(e);
          }
        }}
        onKeyPress={(e) => {
          if (e.key == "Enter") {
            console.log("Enter pressed");
          }
        }}
      ></Search>
      <div className="navbar_searchBox">
        {mainData.map((item) => {
          return (
            <div
              onClick={(e) => {
                window.location.href = `/game/${item._id}`;
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <a>
        <Link to="/">Discover</Link>
      </a>
      <a>
        <Link to="/browse">Browse</Link>
      </a>

      <a>
        <Link to="/wishlist">Wishlist</Link>
      </a>
      <Link to="/cart">Cart</Link>
      <Link to="/purchased">My orders</Link>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 88vw;
  background: rgb(18, 18, 18);
  height: 50px;
  margin: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding-left: 10vw;
  gap: 15px;
  position: sticky;
  top: 0;
  z-index: 999;

  a {
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    color: #d5d5d5;
  }
  span {
    color: white;
    font-size: 10px;
  }
`;
const Search = styled.input`
  width: 150px;
  padding: 10px;
  padding-left: 15px;
  border: none;
  outline: none;
  border-radius: 20px;
  background: #2a2a2a;
  color: white;
`;
