import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function Header() {
   return (
        <Navbar>

            <Logo src="data:image/png;base64,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" />
            <NavMenu>
                <a>
                <Link to="/">Discover</Link>
                </a>
                <a>
                <Link to="/">FAQ</Link>
                    
                </a>
                <a>
                <Link to="/">HELP</Link>
                 </a>
                <a>
                    <span>UNREAL ENGINE</span>
                </a>
            </NavMenu>
            <NavTools>
                <LanguageImage src='data:image/png;base64,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' />
                <Link to="/signUp">
                <UserImage src="https://www.aha.video/assets/icons/svg/avatar_profile.svg" />
                </Link>
                <SignIn>
                    SIGN IN
                </SignIn>
                <SubscribeButton>
                    DOWNLOAD
                </SubscribeButton>
            </NavTools>


        </Navbar>
    )

}

export default Header

const Navbar = styled.nav`
    height: 50px;
    background: #2a2a2a;
    display: flex;
    align-items: center;
    padding: 0px 32px;
    overflow-x: hidden;  
`

const Logo = styled.img`
     width: 40px;
`


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
}
span {
        font-size: 10px;
        letter-spacing: 0.5px;
}


`

const NavTools = styled.div`
    display: flex;
    margin-left: 50px;
    align-items: center;
    gap: 28px;
`

const SearchImage = styled.img`
    cursor: pointer;
`
const LanguageImage = styled.img`
    cursor: pointer;
    width: 22px;
    border-radius:50%;
    
    
`
const SubscribeButton = styled.button`
padding: 5px 23px;
background: blue;
min-width: 140px;
min-height: 40px;
// border-radius: 20px;
font-style: normal;
align-items: center;
justify-content: center;
text-align: center;
border:none;
color: #bcbcbd;
cursor: pointer;
`
const UserImage = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid black;
    background: #37474F;
  
`
const SignIn = styled.span`
    font-size: 9px;
    margin-right: 15px;
    margin-left: -15px;
    letter-spacing: 1;
    cursor: pointer ;
`