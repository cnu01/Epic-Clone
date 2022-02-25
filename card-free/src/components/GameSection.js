import React from 'react'
import{useEffect, useState} from "react"
import GameCard from './GameCard'

import "./GameSection.css"
import GameSale from './GameSale'
import FreeCardContainer from './FreeCardContainer'
import Group from './Group'
function GmaeSection() {
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
      <div>
      {game && game.slice(0, 5).map((item) => {
        return <GameCard data={item} key={item._id}/>
      }) 
      }

    </div>
    </div>
  )
}

export default GmaeSection