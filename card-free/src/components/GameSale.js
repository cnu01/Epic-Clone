import React from 'react'
import "./GameCard.css"
function GameSale({data}) {
  return (
    <div>
        <div className='new-box'  id='last'>
        {/* <div className='heading'>
        <div>
            <h2>Coming Soon</h2>
        </div>
        <div className='view-more'>
            <button className='view-btn'>View More</button>
        </div>
        </div> */}
        <div className='game-card'>
            <div className='game-content'>
                <div className='img-div'>
                    <img className='game-img' src={data.cardImage}></img>
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
  )
}

export default GameSale