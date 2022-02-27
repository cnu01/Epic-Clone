import React from 'react'
import{useEffect, useState} from "react"
import GameCard from './GameCard'
import TopGames from './TopGames'
import "./GameSection.css"
import GameSale from './GameSale'
import FreeCardContainer from './FreeCardContainer'
import Group from './Group'
function GmaeSection2() {
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
  console.log(game)
  return (
    <div className='game-cont'>
      <h5 className='game-topsellersssss'>New Realses</h5>
      <div>
      {game && game.slice(5, 10).map((item) => {
        return <GameSale data={item} key={item._id}/>
      }) 
      }
    </div>
    </div>
  )
}

export default GmaeSection2