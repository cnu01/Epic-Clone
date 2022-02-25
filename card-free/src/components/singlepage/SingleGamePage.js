import React from 'react'
import "./SingleGame.css"
function SingleGamePage() {
  return (
    <div className='single-main'>
        <div className='game-title'>
            <h1>Sherlock Holmes Chapter One</h1>
        </div>
        <div className='game-video'>
            <div className='video-div'>
                <img className='video-img' src="https://cdn2.unrealengine.com/egs-brothersataleoftwosons-starbreezestudiosab-g1a-00-1920x1080-52c529b5044f.jpg"></img>
                <div>
                        <div className='game-intro'>
                           <h3>Guide two brothers on an epic fairy tale journey from visionary Swedish film director, Josef Fares and top-tier developer Starbreeze Studios. This is one journey you will never forget.</h3>
                        </div>
                        <div className='Genres'>
                        <div className='G-1'>
                            <p>Genres</p>
                            <h3>Adventure</h3>
                        </div>
                        <div className='G-1'>
                            <p>Features</p>
                            <h3>Single Player</h3>
                        </div>
                        </div>
                    </div>
                    <div className='about-game'>
                    <p>
                    Guide two brothers on an epic fairy tale journey from visionary Swedish film director, Josef Fares and top-tier developer Starbreeze Studios.
                    Control both brothers at once as you experience co-op play in single player mode, like never before.
                    Solve puzzles, explore the varied locations and fight boss battles, controlling one brother with each thumbstick.
                    A man, clinging to life. His two sons, desperate to cure their ailing father, are left with but one option. They must set out upon a journey to find and bring back the "Water of Life" as they come to rely on one another to survive. One must be strong where the other is weak, brave where the other is fearful, they must be... Brothers.
                    This is one journey you will never forget.
                    </p>
                    </div>
            </div>
            <div className='singleGame-detail'>
                <div>
                   <p>game icon</p>
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
}

export default SingleGamePage