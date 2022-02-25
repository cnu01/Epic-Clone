import React from 'react'
import GameCard from './GameCard'
import TopGames from './TopGames'
import "./GameSection.css"
import GameSale from './GameSale'
function GmaeSection() {
  return (
    <div className='game-cont'>
      <GameCard />
      <TopGames />
      <GameSale />
    </div>
  )
}

export default GmaeSection