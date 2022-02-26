
import styled from 'styled-components'

export const Navbar = () => {
    return (
        <Nav>
            <Search placeholder='Search'></Search>
            <a>
                <span>Discover</span>
            </a>
            <a>
                <span>Browse</span>
            </a>
            <a>
                <span>News</span>
            </a>
            <a>
                <span>Wishlist</span>
            </a>
            <a>
                <span>Cart</span>
            </a>
        </Nav>
    )
}


const Nav = styled.nav`
width:98.3%;
// border:1px solid red;
background:rgb(18, 18, 18);
margin:auto;
padding:10px;
display:flex;
align-items:center;
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
