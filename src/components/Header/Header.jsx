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
            <Link to="/">
            <Logo src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAB0CAMAAABE6mf9AAAB7FBMVEVMaXH////////n5+dwcHD///////////97e3v////////////////8/Pz+/v7///////+xsbH////////+/v7+/v7+/v729vbS0tLOzs7e3t6wsLD///8YGBjPz8/9/f3////7+/v////////8/Pzf39/4+Phubm7+/v7///85OTmSkpLLy8v////+/v7////Z2dn////6+vr39/fU1NT+/v6enp6lpaX9/f3////+/v719fX39/f8/Pz////////AwMD9/f3////9/f38/Pzb29v4+Pj39/f///////+3t7f8/Pze3t77+/uTk5P8/Pz4+Pjx8fH+/v7c3Nz5+fni4uL6+vr////5+fn///+qqqr09PT9/f3+/v7e3t7////8/Pz6+vr9/f3////7+/vn5+f6+vr+/v65ubn29vbMzMyhoaHb29vr6+vExMS2trb8/Pz7+/v7+/u2tra7u7vm5ub+/v6enp77+/v////////5+fn7+/v5+fmpqana2trZ2dnOzs76+vrLy8vl5eXW1tbJycnS0tL5+fn7+/vn5+f19fW9vb3Hx8f5+fn4+PjNzc3+/v7AwMDZ2dm1tbX5+fm2trb29vbe3t7p6em9vb3y8vLKysrT09Pc3Nz09PTh4eHIyMjm5ub///+stlOlAAAAo3RSTlMA9vsEAf3l/gL5UvDtEgnz7wP0wqWEijAcGiUJgAQUJNzOq+jrKOQIG64JUlTsmuKN3+AZDdkGFpbV4ToQIVC7Cg3SY3AgHgfEsh4VZcgOlAondSO7LCqo17YwNY6gj2hLRX/N0i/mWpnvElQ6Qj4+VnzpaBJP5UTCgcqqvIs6Fh5krSyESEZZ3dp3tzR68qOAh1CHS4VBS0pacG8hhHZdoqdl1QdEjAAACP1JREFUeF7tmvtf08gaxpNJ0iEkJb0BKEhDs0B7zmlrLRQoLZS0tmAFaFlABeQu53CABQQFkEXA+3W97eqq657tP3pmUjSUSitCPZ+zy/NTMszkyzvvO88kAwRBRUfqZTKRG5Gyo8lNEZT/lawjYY4gkNQ1FJoJd6ETJHIp4HQQIzJI5FYMRzh0iZyLaGC/AYSF3wCSSPyJIMeQYwjg+N0SALY49Z4jmR3jY5WOH50VsrxmRzwJs0CA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" />
            </Link>
            <NavMenu>
                <a>
                <Link to="/">STORE</Link>
                </a>
                <a>
                <Link to="/">FAQ</Link>
                    
                </a>
                <a>
                <Link to="/">HELP</Link>
                 </a>
               
            </NavMenu>
            <NavTools>
                <LanguageImage src='data:image/png;base64,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' />
                <Link to="/signUp">
                <UserImage src="https://www.aha.video/assets/icons/svg/avatar_profile.svg" />
                </Link>
                <SignIn>
                   <Link to="/login"><a>{
                       localStorage.getItem("token")!=null?"loggedIn":"SIGN IN"
                   } </a></Link>
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
    width:95.5vw;
    height: 50px;
    background: #2a2a2a;
    display: flex;
    align-items: center;
    padding-left:1.5vw;
    padding-right:1.5vw;
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
    color:#D5D5D5;
    font-size:12px;
    text-decoration:none;
}
span {
        font-size: 10px;
        letter-spacing: 0.5px;
        color:#D5D5D5;
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
font-family: sans-serif;
min-width: 140px;
min-height: 40px;
font-style: normal;
align-items: center;
justify-content: center;
text-align: center;
font-size:12px;
border:none;
color: white;
cursor: pointer;
`
const UserImage = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    background: #37474F;
  
`
const SignIn = styled.span`
    font-size:12px;
    margin-right: 15px;
    margin-left: -15px;
    letter-spacing: 1;
    cursor: pointer ;
    color:#D5D5D5;
   
    a{
        text-decoration:none;
        color:white;
    }

`