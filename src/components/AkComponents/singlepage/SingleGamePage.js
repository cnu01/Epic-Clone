import { Navbar } from '../../Header/Navbar';
import Header from '../../Header/Header';
import React from 'react'
import { useState,useEffect } from 'react'
import "./SingleGame.css"
import axios from "axios"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";
function SingleGamePage({info}) {
    const [game, setGame] = useState([]);
    const navigate = useNavigate();
    const url = `http://localhost:2345/games/${info}`
    const url2 = "http://localhost:2345/cart"
    const url3 = "http://localhost:2345/wishlist"
    useEffect(() =>{
        const getdata = async() => {
            let response = await fetch(url);
            let data = await response.json();
            let games = data.data
            setGame(games)
        }
      getdata()
    },[])
   
    // console.log(game)
    const handleCart =() => axios.post(url2,{game_id:info}, {
        headers: {
          Authorization: localStorage.getItem("token") 
        }

       }).then(res=>{
           console.log("res",res);
       }).catch(err=>{
            if(err.response.status===403)
            {
                navigate('/login');
            }
            else
            {
                alert("Some error occurred");
            }
       })
       
       const handleWish = () => axios.post(url3,{game_id:info}, {
        headers: {
          Authorization: localStorage.getItem("token") //the token is a variable which holds the token
        }

       })
    
        return (
            <div>
            <Header/>
            <Navbar/>
        <div className="Outer_division">
          <div className='single-main'>
              <div className='game-title'>
                  <h1>{game.title}</h1>
              </div>
              <div className='game-video'>
                  <div className='video-div'>
                      <img className='video-img' src={game.images==undefined?"":game.images[1]}></img>
                      <div>
                              <div className='game-intro'>
                                 <p>{game.description}</p>
                              </div>
                              <br/>
                              <div className='Genres'>
                              <div className='G-1'>
                                  <p>Genres</p>
                                  <h3>{game.genres}</h3>
                              </div>
                              <div className='G-1'>
                                  <p>Features</p>
                                  <h3>{game.features}</h3>
                              </div>
                              </div>
                              <br/>
                          </div>
                          <div className='about-game'>
                          <p>
                        {game.aboutGame}
                          </p>
                          </div>
                  </div>
                  <div className='singleGame-detail'>
                      <div className='thumbnail'>
                         <img src={game.logo}></img>
                      </div>
                      <br/>
                      <br/>
                      <div className='single-price'>
                           <span>₹{game.price==undefined?"":game.price.mainPrice}</span>
                      </div>
                      <div className='video-side'>
                          <button className='get-btn'> <Link to="/" className='addcart-link'>Get</Link></button>
                          <button className='add-btn' onClick={handleCart}>Add to cart</button>
                          <button className='wishlist-btn' onClick={handleWish}>Add to Wishlist</button>
                          
                      </div>
                      <div className='game-info'>
                          <div className='game-info-div'>
                              <p className='game-info-name'>Developer</p>
                              <p>{game.developer}</p>
                          </div>
                          <div className='game-info-div'>
                              <p className='game-info-name'>Publisher</p>
                              <p>{game.publisher}</p>
                          </div>
                          <div className='game-info-div'>
                              <p className='game-info-name'>Release Date</p>
                              <p>{game.releaseDate}</p>
                          </div>
                          <div className='game-info-div'>
                              <p className='game-info-name'>Initial Release</p>
                              <p>09/03/12</p>
                          </div>
                          <div className='game-info-div'>
                              <p className='game-info-name'>Platform</p>
                              <p>
                                <img className='plat-logo' src={game.platform}></img>
                                </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
          </div>
         
        ) 
    }


export default SingleGamePage