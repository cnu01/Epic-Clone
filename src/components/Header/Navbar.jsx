import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import styled from 'styled-components'

export const Navbar = () => {
    return (
        <Nav>
            <Search placeholder='Search'></Search>
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
        </Nav>
    )
}


const Nav = styled.nav`
width:80%;
// border:1px solid red;
background:rgb(18, 18, 18);
height:50px;
margin:auto;
padding:10px;
display:flex;
align-items:center;
margin-top: 10px;
// justify-content:center;
gap:15px;
  position: sticky;
  top: 0;
  z-index: 999;
// height:100px;

a{
    text-decoration:none;
    align-items:center;
    cursor:pointer;
}
span{
    color:white;
font-size:10px;
}
`
const Search = styled.input`
width:150px;
padding:6px;
border:none;
outline:none;
border-radius:20px;
background:#2a2a2a;
color:white;
border:1px solid grey;
margin-left:150px;
`
