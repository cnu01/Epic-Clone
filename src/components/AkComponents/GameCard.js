import React from 'react'
import{useEffect, useState} from "react"
import "./GameCard.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


function GameCard({data,key}) {
const [game, setGame] = useState(null)
  const url = "http://localhost:2345/games"
 
  const getdata = async() => {
    try {    
      let response = await fetch(url);
      let data = await response.json()
      setGame(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() =>{
    getdata()
  },[])

  return (
    <Link to ={`/game/${data._id}`} >
        <div className='game-cont'>
        <div className='new-box'>
            {/* <div className='heading'>
            <div>
                <h2>New Releases</h2>
            </div>
            <div className='view-more'>
                <button className='view-btn'>View More</button>
            </div>
            </div> */}
            <div className='game-card'>
                <div className='game-content'>
                    <div className='img-div'>
                        <img className='game-img' src={data.heroImages[0]}></img>
                    </div>
                    <div className='game-detail'>
                        <p>{data.title}</p>
                       <div className='price'>
                           <div className='discount'>-%{data.price.discountPercentage}</div>
                           <span className='spanone'>{data.price.mainPrice}</span>
                           <span>{data.price.discountedPrice}</span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </Link>
    )
    }
   
  


export default GameCard