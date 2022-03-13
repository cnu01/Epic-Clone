import React from 'react'
import "./SinglePageSpec.css"
import Footer from '../../Footer/Footer';
import { useState,useEffect } from 'react'
function SinglePageSpecs() {
    // const [game, setGame] = useState([])
    // const url = `http://localhost:2345/games/${info}`

    
    // useEffect(() =>{
    //     const getdata = async() => {
    //         let response = await fetch(url);
    //         let data = await response.json();
    //         let games = data.data
    //         setGame(games)
    //     }
    //   getdata()
    // },[])

  return (
    <div className='spec-section'>
       
        <div>
            <h3 id="spec-head">Specifications</h3>
        <div className='spec-inside'>
            <div>
                <h4 className='os-dependency'>WINDOWS</h4>
            </div>
            <div className='spec-compare'>
                <div className='minimum'>
                <div>
                    <div>
                        <h3 className='spec-detail-head'>Minimum</h3>
                    </div>
                    <p className='spec-detail-head'>Os</p>        
                    <p>Windows 7</p>        
                    </div>
                    <div>
                    <p className='spec-detail-head'>Processor</p>        
                    <p>Intel Core i5-3570K </p>        
                    </div>
                    <div>
                    <p className='spec-detail-head'>memory</p>        
                    <p>8 GB RAM</p>        
                    </div>
                    <div>
                    <p className='spec-detail-head'>graphics</p>        
                    <p>NVIDIA GeForce GTX780</p>        
                    </div>
                    <div>
                    <p className='spec-detail-head'>Storage</p>        
                    <p>70 GB[SSD recommended]</p>        
                    </div>
                </div>
                <div className='recommended'>
                <div>
                <div>
                    <h3 className='spec-detail-head'>Recommended</h3>
                </div>
                    <p className='spec-detail-head'>Os</p>        
                    <p>Windows 10</p>        
                    </div>
                    <div>
                    <p className='spec-detail-head'>Processor</p>        
                    <p>Intel Core i7-4790 or AMD Ryzen 3 3200G</p>        
                    </div>
                    <div>
                    <p>Memory</p>        
                    <p>12DB Ram</p>        
                    </div>
                    <div>
                    <p>Graphics</p>        
                    <p>NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury</p>        
                    </div>
                    <div>
                    <p>Storage</p>        
                    <p>200GB</p>        
                    </div>

                </div>
            </div>
            <div className='language'>
            <p>Languages Supported</p>
            <p>AUDIO: English
TEXT: English, French, Italian, German, Spanish - Spain, Japanese, Portuguese, Russian, Chinese - Simplified</p>
            </div>
        </div>


        </div>
        <Footer/>
    </div>
  )
}

export default SinglePageSpecs