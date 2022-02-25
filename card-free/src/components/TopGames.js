import React from 'react'
import "./GameCard.css"
function TopGames() {
  return (
    <div className='new-box'>
         <div className='heading'>
        <div>
            <h2>Top Sellers</h2>
        </div>
        <div className='view-more'>
            <button className='view-btn'>View More</button>
        </div>
        </div>
        <div className='game-card'>
            <div className='game-content'>
                <div className='img-div'>
                    <img className='game-img' src="https://cdn1.epicgames.com/spt-assets/9f1a7803961e4b8ab3f5d446b9bc9c7e/download-forgotten-fields-offer-1uffd.jpg?h=480&resize=1&w=360"></img>
                </div>
                <div className='game-detail'>
                    <p>Forgotten Fields</p>
                   <div className='price'>
                       <div className='discount'>-30%</div>
                       <span className='spanone'>$23</span>
                       <span>$12</span>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopGames