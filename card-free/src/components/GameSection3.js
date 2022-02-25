import React from 'react'
import{useEffect, useState} from "react"
import GameCard from './GameCard'
import "./GameSection.css"
import GameSale from './GameSale'
import FreeCardContainer from './FreeCardContainer'
import Group from './Group'
import TopGames from './TopGames'

function GameSection3() {
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
        {game && game.slice(10, 15).map((item) => {
          return <TopGames data={item} key={item._id}/>
        }) 
        }
      </div>
      </div>
    )
}

export default GameSection3