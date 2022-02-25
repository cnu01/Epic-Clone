import React from 'react'
import { useState,useEffect } from 'react'
import "./SingleGame.css"
function SingleGamePage({info}) {
    const [game, setGame] = useState([])
    const url = "http://localhost:2345/games"

    const getdata = async() => {
      try {    
        let response = await fetch(url);
        let data = await response.json();
        const games = data.data.filter((item) => item._id == info)
        console.log(data)
        setGame(games)
      } catch (error) {
        console.log(error)
      }
    }
    console.log(info)
    useEffect(() =>{
      getdata()
    },[])
    console.log(game)

    if(game.length !== 0){
        return (
          <div className='single-main'>
              <div className='game-title'>
                  <h1>{game[0].title}</h1>
              </div>
              <div className='game-video'>
                  <div className='video-div'>
                      <img className='video-img' src={game[0].cardImage}></img>
                      <div>
                              <div className='game-intro'>
                                 <h3>{game[0].description}</h3>
                              </div>
                              <div className='Genres'>
                              <div className='G-1'>
                                  <p>Genres</p>
                                  <h3>{game[0].genres}</h3>
                              </div>
                              <div className='G-1'>
                                  <p>Features</p>
                                  <h3>{game[0].gameFeatures}</h3>
                              </div>
                              </div>
                          </div>
                          <div className='about-game'>
                          <p>
                        {game.aboutGame}
                          </p>
                          </div>
                  </div>
                  <div className='singleGame-detail'>
                      <div>
                         <img src={game.logo}></img>
                      </div>
                      <div>Game Price</div>
                      <div className='video-side'>
                          <button className='get-btn'>Get</button>
                          <button className='add-btn'>Add to cart</button>
                          <button className='wishlist-btn'>Add to Wishlist</button>
                          
                      </div>
                      <div className='game-info'>
                          <div className='game-info-div'>
                              <p className='game-info-name'>Developer</p>
                              <p>starbreezestudiosab</p>
                          </div>
                          <div className='game-info-div'>
                              <p className='game-info-name'>Publisher</p>
                              <p>505 Games</p>
                          </div>
                          <div className='game-info-div'>
                              <p className='game-info-name'>Release Date</p>
                              <p>2/15/22</p>
                          </div>
                          <div className='game-info-div'>
                              <p className='game-info-name'>Initial Release</p>
                              <p>09/03/12</p>
                          </div>
                          <div className='game-info-div'>
                              <p className='game-info-name'>Platform</p>
                              <p>Windows</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
         
        ) 
    }else{
        console.log("empty")
    }
}

export default SingleGamePage