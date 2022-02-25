import React from 'react'
import{useEffect, useState} from "react"
function Group() {
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
  return (
   <div className='group-div'>
        <div>
            <img src="https://cdn2.unrealengine.com/egs-lol-renata-glasc-desktop-1920x1080-1920x1080-f26db1cb3d84.png"></img>
            <h3>League of Legends</h3>
            <p className='g-detail'>Control the battlefield with League's newest champion, Renata Glasc.</p>
            <p>Free</p>
        </div>
        <div>
            <img src="https://cdn2.unrealengine.com/egs-lol-renata-glasc-desktop-1920x1080-1920x1080-f26db1cb3d84.png"></img>
            <h3>League of Legends</h3>
            <p className='g-detail'>Control the battlefield with League's newest champion, Renata Glasc.</p>
            <p>Free</p>
        </div>
        <div>
            <img src="https://cdn2.unrealengine.com/egs-lol-renata-glasc-desktop-1920x1080-1920x1080-f26db1cb3d84.png"></img>
            <h3>League of Legends</h3>
            <p className='g-detail'>Control the battlefield with League's newest champion, Renata Glasc.</p>
            <p>Free</p>
        </div>
    </div>
    
  )
}

export default Group